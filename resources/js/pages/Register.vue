<template>
  <div class="registration-form">
    <h1>Formularz Rejestracji</h1>
    <form method="POST" action="{{ route('register') }}" @submit.prevent="submitForm">
      <div v-for="(field, fieldName) in formFields" :key="fieldName" class="form-group">
        <label :for="fieldName">{{ field.label }}:</label>
        <input
          :type="field.type"
          :id="fieldName"
          v-model="formData[fieldName]"
          :required="field.required"
        />
      </div>
        <input type="hidden" name="_token" :value="csrfToken" />
      <button type="submit">Zarejestruj</button>
    </form>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
  csrfToken.value = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
});

const csrfToken = ref('');

const formData = ref({
  login: '',
  password: '',
  confirmPassword: '',
  name: '',
});

const formFields = {
  name: { label: 'Imię', type: 'text', required: true },
  login: { label: 'Login', type: 'text', required: true },
  password: { label: 'Hasło', type: 'password', required: true },
  confirmPassword: {
    label: 'Potwierdź Hasło',
    type: 'password',
    required: true,
  },
};

const submitForm = () => {
  axios
    .post('/api/register', formData.value)
    .then(response => {
      console.log('Rejestracja przebiegłą pomyślnie', response.data);
    })
    .catch(error => {
      console.error('Błąd rejestracji', error.response.data);
    });
};
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-block: 7px;
}

input {
  width: 90%;
  padding: 10px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (min-width: 768px) {
  /* Stylizacja dla ekranów o szerokości do 768px */
  .registration-form {
    max-width: 100%;
  }
  button {
    width: 30%;
  }
}
</style>
