window.onload = () => {
  const acessar = document.getElementById("acessar");
  const glitch = document.querySelector(".glitch");
  const camada2 = document.getElementById("camada2");
  const statusCheck = document.getElementById("status-check");
  const ipDisplay = document.getElementById("ip-display");
  const armazenado = document.getElementById("armazenamento");
  const posVerificacao = document.getElementById("pos-verificacao");
  const verCor = document.getElementById("ver-cor");
  const verTipografia = document.getElementById("ver-tipografia");
  const camada3Cor = document.getElementById("camada3-cor");
  const camada3Tipografia = document.getElementById("camada3-tipografia");

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
                posVerificacao.classList.remove("oculto");
                posVerificacao.querySelector(".tilt").classList.add("tilt");
              }, 800);
            }, 1000);
          });
      }
    }, 700);
  });

  verCor.addEventListener("click", () => {
    camada3Cor.classList.remove("oculto");
    camada3Tipografia.classList.add("oculto");
  });

  verTipografia.addEventListener("click", () => {
    camada3Tipografia.classList.remove("oculto");
    camada3Cor.classList.add("oculto");
  });
};
