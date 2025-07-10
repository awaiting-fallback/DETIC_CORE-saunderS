import React from "react";

const ExampleBlock = ({ label, content, className }) => (
  <div className={`mb-6 ${className}`}>
    <div className="uppercase font-extrabold text-white text-3xl tracking-tight">
      {label}
    </div>
    <div className="font-mono text-white mt-2 text-sm tracking-wide whitespace-pre-wrap">
      {content}
    </div>
  </div>
);

export default function TypographyManual() {
  return (
    <div className="bg-black min-h-screen text-white p-10 space-y-12">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        TIPOGRAFIA DETIC – A LINGUAGEM DO COLAPSO
      </h1>

      <ExampleBlock
        label="H1 — TITULAÇÃO BRUTAL"
        content="DETIC: SISTEMA EM COLAPSO"
        className="text-4xl font-extrabold tracking-tighter"
      />

      <ExampleBlock
        label="H2 — SUBTÍTULO CORTADO"
        content="CAMADA 2 – CONTRASTE FUNCIONAL"
        className="text-2xl font-extrabold tracking-tight"
      />

      <ExampleBlock
        label="H3 — TERMINAL GLITCH"
        content="./executar_protocolo.sh"
        className="text-xl font-mono text-green-400"
      />

      <ExampleBlock
        label="Body — MENSAGEM DO SISTEMA"
        content={`este é o corpo da falha\nleia ou morra`}
        className="text-base font-mono text-white"
      />

      <ExampleBlock
        label="Micro — RUÍDO LEGAL"
        content="*arquivo corrompido*"
        className="text-xs font-mono text-gray-400"
      />
    </div>
  );
}
