<template>
  <div class="login-container">
    <tapa-navigation-header />
    <div class="logo-container">
      <img :src="require('@/assets/logo.png')" alt="logo" />
    </div>
    <div class="signin-container">
      <div class="container">
        <h1>Falta pouco para dá um <br />tapa no visual</h1>
        <div class="buttons-container">
          <tapa-icon-button
            :key="button.text"
            v-for="button of buttons"
            :prefix="button.prefix"
            :icon="button.icon"
            :text="button.text"
            :colorful="button.colorful"
          />
        </div>
        <div class="footer">
          <p>
            Ao continuar, aceito os <a href="#">Termos de serviço</a> e a
            <a href="#">Política de privacidade</a>
            do Tapa
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        {
          text: "Continuar com Telefone",
          icon: "phone",
          prefix: "fas",
          colorful: true,
        },
        {
          text: "Continuar com Google",
          icon: "google",
          prefix: "fab",
          colorful: false,
        },
        {
          text: "Continuar com Facebook",
          icon: "facebook",
          prefix: "fab",
          colorful: false,
        },
        {
          text: "Continuar com Apple",
          icon: "apple",
          prefix: "fab",
          colorful: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  background: #433a39;
  width: 100vw;
  height: 100vh;
  position: relative;
}
.logo-container {
  //background: red;
  display: flex;
  justify-content: center;

  height: 25vh;
  img {
    margin-top: 35px;
    width: 100px;
    height: 99px;
  }
}
.signin-container {
  background: #f8f9fa;
  width: 100vw;
  height: 65vh;
  border-radius: 12px 12px 0px 0px;
  z-index: 2;
  position: absolute;
  .container {
    height: 100%;
    //background: red;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  h1 {
    font-size: 16px;
    color: #343a40;
    text-align: center;
  }
  .buttons-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .footer {
    text-align: center;
    font-size: 12px;
    color: #868e96;
    a {
      color: #f5b144;
      text-decoration: none;
    }
  }
}
</style>