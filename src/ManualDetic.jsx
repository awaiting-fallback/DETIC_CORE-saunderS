import React from "react";

const colors = {
  nucleo: [
    { name: "Preto Abissal", hex: "#0A0A0A", rgb: "(10,10,10)", cmyk: "0C 0M 0Y 96K", ansi: "\u001b[38;5;16m" },
    { name: "Cinza Interferência", hex: "#1E1E1E", rgb: "(30,30,30)", cmyk: "0C 0M 0Y 88K", ansi: "\u001b[38;5;235m" },
    { name: "Vermelho Pânico", hex: "#C62828", rgb: "(198,40,40)", cmyk: "20C 95M 90Y 0K", ansi: "\u001b[38;5;196m" },
  ],
  contraste: [
    { name: "Azul Máquina", hex: "#3D5AFE", rgb: "(61,90,254)", cmyk: "80C 70M 0Y 0K", ansi: "\u001b[38;5;33m" },
    { name: "Amarelo Quântico", hex: "#FFFF00", rgb: "(255,255,0)", cmyk: "0C 0M 100Y 0K", ansi: "\u001b[38;5;226m" },
    { name: "Verde Sintético", hex: "#00FF00", rgb: "(0,255,0)", cmyk: "90C 0M 100Y 0K", ansi: "\u001b[38;5;48m" },
    { name: "Roxo Neuroativo", hex: "#875FFF", rgb: "(135,95,255)", cmyk: "60C 70M 0Y 0K", ansi: "\u001b[38;5;135m" },
  ],
  ruido: [
    { name: "Ciano Espasmódico", hex: "#00FFFF", rgb: "(0,255,255)", cmyk: "100C 0M 0Y 0K", ansi: "\u001b[38;5;51m" },
    { name: "Magenta Estilhaçado", hex: "#FF00FF", rgb: "(255,0,255)", cmyk: "0C 100M 0Y 0K", ansi: "\u001b[38;5;201m" },
    { name: "Azul Distorcido", hex: "#4B6BB8", rgb: "(75,107,184)", cmyk: "60C 40M 0Y 20K", ansi: "\u001b[38;5;75m" },
    { name: "Branco Espectral", hex: "#F2F2F2", rgb: "(242,242,242)", cmyk: "0C 0M 0Y 5K", ansi: "\u001b[38;5;254m" },
  ]
};

const LayerCard = ({ title, description, colors }) => (
  <div className="bg-zinc-900 text-white border border-white/10 rounded-lg p-4 mb-8">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="mb-4 text-sm text-white/70">{description}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {colors.map((color) => (
        <div key={color.hex} className="rounded-xl overflow-hidden border border-white/10">
          <div className="h-16" style={{ backgroundColor: color.hex }}></div>
          <div className="p-2 text-xs">
            <strong>{color.name}</strong><br />
            HEX: {color.hex}<br />
            RGB: {color.rgb}<br />
            CMYK: {color.cmyk}<br />
            ANSI: <code>{color.ansi}</code>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function ManualDETIC() {
  return (
    <div className="p-6 bg-black min-h-screen text-white space-y-8">
      <h1 className="text-3xl font-black text-center mb-10">MANUAL DE COR DETIC – RUÍDO VISUAL</h1>
      <LayerCard
        title="CAMADA 1 — NÚCLEO BRUTAL"
        description="Uso contínuo. Essência visual. Tipografia, fundo, interface. Sempre presentes."
        colors={colors.nucleo}
      />
      <LayerCard
        title="CAMADA 2 — CONTRASTE FUNCIONAL"
        description="Para destaque lógico. Um por vez. Nunca em fundo. Nunca com ruído."
        colors={colors.contraste}
      />
      <LayerCard
        title="CAMADA 3 — RUÍDO CONTROLADO"
        description="Glitch e colapso visual. Um por aplicação. Proibido em interface contínua."
        colors={colors.ruido}
      />
    </div>
  );
}
