<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
		class="form"
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nome da loja"
      required
    ></v-text-field>

		<v-text-field
      v-model="endereco"
      :rules="enderecoRules"
      label="Endereço"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

		<v-text-field
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      label="Senha"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Aceita nossos termos?"
      required
    ></v-checkbox>

		<v-btn
		class="btn"
			to="/"
			color="success"
			>
			Cadastrar
		</v-btn>
    
  </v-form>
</template>


<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length <= 10) || 'Nome deve ter até 10 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser valido',
      ],
      select: null,
      checkbox: false,
    }),

  }
</script>


<style scoped>
.form {
	margin: 20px;
}

.btn {
	display: flex;
	justify-content: space-around;
}


</style>