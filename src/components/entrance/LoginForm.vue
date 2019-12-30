<template>
  <div>
    <v-content>
      <v-card class="mx-auto" max-width="400" raised>
        <v-row align="center" justify="center">
          <v-col>
            <v-img src="https://www.jamesgood.co.uk/sites/default/files/Logo-Blog_52.png" contain></v-img>
          </v-col>
        </v-row>
        <v-card-text>
          <!-- Aunque no aparece exactamente asi en la documentacion asi funciona la transicion-->
          <!-- Quiza funciona sobre tags html nativos y no sobre componentes -->
          <v-fade-transition>
            <div v-show="cloudError.hasErrors">
              <v-alert type="warning" dense>
                <span class="body-2">{{cloudError.description}}</span>
              </v-alert>
            </div>
          </v-fade-transition>
          <v-form ref="loginForm" @submit.prevent="handleParsingLoginForm">
            <v-text-field
              v-model="formData.username"
              label="Nombre de Usuario"
              :rules="[v => !!v || 'Campo obligatorio']"
              required
              autocomplete="off"
            ></v-text-field>
            <v-text-field
              v-model="formData.password"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="showPassword ? 'text' : 'password'"
              :rules="[v => !!v || 'Campo obligatorio']"
              @click:append="showPassword = !showPassword"
              label="Contraseña"
              required
              autocomplete="off"
            ></v-text-field>
            <v-row>
              <v-col>
                <v-btn class="mr-4 primary text-capitalize" block type="submit">Ingresar</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <p
          class="text-center grey--text lighten-1 caption"
        >Al ingresar, aceptas nuestras Términos y Condiciones</p>
      </v-card>
    </v-content>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data: () => {
    return {
      formData: {},
      cloudError: {
        hasErrors: false
      },
      showPassword: false,
      alert: false
    };
  },
  methods: {
    handleParsingLoginForm: async function() {
      // Limpiamos mensajes de validacion y Revalidamos el Formulario
      // Es necesario validarlo. v-form tiene clase novalidate
      if (this.$refs.loginForm.validate()) {
        var argins = this.formData;
        // Se creo esto objeto para evitar el error XMLHttpRequest has been blocked by CORS
        try {
          const response = await axios.put(
            "https://zenitx.loginto.me:1337/api/v1/login",
            argins
          );
          // console.log(response);
          // TODO. Verificar si el inicio de Sesion fue correcto o no
          if (response.data.hasErrors) {
            // Hacer this.cloudError.hasErros = true no trigger las propiedades
            // reactivas (no update the vm). Es necesario hacer esto si se agregan propiedades dentro de un
            // objeto declarado en data(). Solo cambiar el valor de algo declarado en el data()
            // Deberia trigger updated
            this.cloudError = Object.assign({}, this.cloudError, {
              hasErrors: true,
              description: "El usuario o la contraseña no corresponden"
            });
            // ahora que ambas propiedades fueron creadas reactivamente deberiamos poder usarlas de manera normal
            setTimeout(() => {
              this.cloudError.hasErrors = false;
              this.cloudError.description = "";
            }, 5000);
          } else {
              // Guardamos la session en el LocalStorage para la comunicacion con el Servidor
              localStorage.setItem('session', response.data.session)
              this.$router.push({name: 'home'})
              // .catch(err => {
              //   // console.log(err)
              // })
          }
        } catch (e) {
          // console.log(
          //   "Ha ocurrido un error al consumir la Api en LoginForm.component"
          // );
          // console.log(e);
        }
      } else {
        // Luego de 3 segundos Limpiamos la Validacion
        setTimeout(() => this.$refs.loginForm.resetValidation(), 5000);
        return;
      }
    }
  }
};
</script>
