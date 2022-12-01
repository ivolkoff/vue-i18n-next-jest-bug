<template>
  <div>{{ t('password_recovery') }}</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<i18n>
{
  "en": {
    "email": {
      "placeholder": "E-mail Address"
    },
    "password": {
      "placeholder": "Password"
    },
    "confirmation": {
      "placeholder": "Google Auth code"
    },
    "password_recovery": "Forgot password?",
    "btn": "Sign in"
  },
  "ru": {
    "email": {
      "placeholder": "Email адрес"
    },
    "password": {
      "placeholder": "Пароль"
    },
    "confirmation": {
      "placeholder": "Google Auth код"
    },
    "password_recovery": "Забыли пароль?",
    "btn": "Войти"
  },
  "uk": {
    "email": {
      "placeholder": "Email адреса"
    },
    "password": {
      "placeholder": "Пароль"
    },
    "confirmation": {
      "placeholder": "Google Auth код"
    },
    "password_recovery": "Забули пароль?",
    "btn": "Увійти"
  }
}
</i18n>
