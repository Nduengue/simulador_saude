import "./login.css";

export default function login() {
  return (
    <div id="login_container">
      <section id="login_left">
        <div id="login_left_content" className="transition-all duration-500 ease-in-out pd-[1.5em]">
          <h1>Entrar</h1>
          <p className="login_left_sub">Venha simular o seguro connosco.</p>
          <form>
            <div id="login_social">
              <a href="#" className="social_btn_content mb-3">
                <button
                  id="login_google"
                  className="w-full relative py-4 font-semibold rounded-[60px] text-[0.8em] shadow-lg hover:shadow-xl"
                >
                  <span>Entrar com o Google</span>
                </button>
              </a>
              <a href="#" className="social_btn_content">
                <button
                  id="login_facebook"
                  className="w-full relative py-4 font-semibold rounded-[60px] text-[0.8em] shadow-lg hover:shadow-xl"
                >
                  <span>Entrar com o Facebook</span>
                </button>
              </a>
            </div>
            <div id="login_separator">
              <div className="separator_left"></div>
              <p>ou entre com o seu email</p>
              <div className="right"></div>
            </div>
            <div className="form-control mb-4">
              <label
                htmlFor="login_email"
                className="font-bold text-[1em] mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="login_email"
                placeholder="Digite o seu email"
                className="w-full relative rounded-[60px] p-[1em] border border-[rgba(0,0,0,0.1)] text-[0.9em]"
              />
            </div>
            <div className="form-control">
              <label htmlFor="login_pass" className="font-bold text-[1em] mb-1">
                Senha:
              </label>
              <input
                type="password"
                id="login_pass"
                placeholder="Digite a sua senha"
                className="w-full relative py-3 rounded-[60px] p-[1em] border border-[rgba(0,0,0,0.1)] text-[0.9em]"
              />
            </div>
            <p>
              <a href="#" className="text-right text-[0.8em] font-bold">
                Esqueci a senha
              </a>
            </p>
            <div className="form-control">
              <a href="#" id="login_btn">
                Entrar
              </a>
            </div>
            <p>
              <a href="#">Não tem conta? Crie uma agora</a>
            </p>
          </form>
        </div>
      </section>
      <section id="login_right">
        <div id="login_slide">
          <div>
            <p>O melhor seguro à um clique de distância</p>
          </div>
        </div>
      </section>
    </div>
  );
}
