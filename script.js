window.onload = () => {
  const acessar = document.getElementById("acessar");
  const glitch = document.querySelector(".glitch");
  const camada2 = document.getElementById("camada2");
  const statusCheck = document.getElementById("status-check");
  const ipDisplay = document.getElementById("ip-display");
  const armazenado = document.getElementById("armazenamento");

  // Centralizar tudo vertical e horizontal
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "center";
  document.body.style.height = "100vh";
  document.body.style.margin = "0";

  setTimeout(() => {
    acessar.style.opacity = 1;
  }, 4000);

  acessar.addEventListener("click", () => {
    glitch.style.display = "none";
    acessar.style.display = "none";
    camada2.classList.remove("oculto");
    camada2.classList.add("visivel");

    const etapas = [
      "TESTANDO SEGURANÇA...",
      "RASTREANDO CAMADA LOCAL...",
      "INTERFERÊNCIA DETECTADA...",
      "VERIFICANDO ORIGEM..."
    ];

    let etapaAtual = 0;

    const mostrarEtapas = setInterval(() => {
      if (etapaAtual < etapas.length) {
        statusCheck.innerText = `> ${etapas[etapaAtual]}`;
        etapaAtual++;
      } else {
        clearInterval(mostrarEtapas);
        statusCheck.style.display = "none";
        ipDisplay.style.display = "block";

        fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => {
            ipDisplay.innerText = `> origin: ${data.ip}`;
          })
          .catch(() => {
            const falhas = [
              "[indetectável]",
              "[rede oculta]",
              "[submersa]",
              "[sem traço]",
              "[desconhecida]",
              "[instância anônima]",
              "[falha no rastreio]"
            ];
            const aleatorio = falhas[Math.floor(Math.random() * falhas.length)];
            ipDisplay.innerText = `> origin: ${aleatorio}`;
          })
          .finally(() => {
            setTimeout(() => {
              armazenado.style.display = "block";
              armazenado.innerText = "> resposta armazenada";

              setTimeout(() => {
                document.body.style.backgroundColor = "black";
                document.body.innerHTML = "";

                setTimeout(() => {
                  document.body.style.backgroundColor = "#0A0A0A";
                  document.body.innerHTML = `
                    <div class='container' style='text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh;'>
                      <button class='botao-detic' id='ver-paleta'>sistema cromático</button>
                      <div id='paleta-cromatica'>
                        <div class='faixa preto'>PRETO ABISSAL<br><span>preto funcional</span></div>
                        <div class='faixa cinza'>CINZA INTERFERÊNCIA<br><span>cinza funcional</span></div>
                        <div class='faixa vermelho'>VERMELHO PÂNICO<br><span>vermelho funcional</span></div>
                        <div class='faixa azul'>AZUL MÁQUINA<br><span>azul funcional</span></div>
                        <div class='faixa amarelo'>AMARELO QUÂNTICO<br><span>amarelo funcional</span></div>
                        <div class='faixa verde'>VERDE SINTÉTICO<br><span>verde funcional</span></div>
                        <div class='faixa roxo'>ROXO NEUROATIVO<br><span>roxo funcional</span></div>
                        <div class='faixa ciano'>CIANO ESPASMÓDICO<br><span>ciano espasmódico</span></div>
                        <div class='faixa magenta'>MAGENTA ESTILHAÇADO<br><span>magenta estilhaçado</span></div>
                        <div class='faixa distorcido'>AZUL DISTORCIDO<br><span>azul distorcido</span></div>
                        <div class='faixa branco'>BRANCO ESPECTRAL<br><span>branco espectral</span></div>
                      </div>
                    </div>`;

                  document.getElementById("ver-paleta").addEventListener("click", () => {
                    document.getElementById("ver-paleta").style.display = "none";
                    document.getElementById("paleta-cromatica").style.display = "flex";
                  });

                }, 2000);
              }, 4000);

            }, 1000);
          });
      }
    }, 700);
  });
};
