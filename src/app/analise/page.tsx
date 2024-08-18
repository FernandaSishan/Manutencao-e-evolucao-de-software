"use client";

import { useState, useEffect } from "react";

const Analise = () => {
  const [requisicoes, setRequisicoes] = useState([]);

  useEffect(() => {
    // Simulando a chamada para obter as requisições em análise
    const requisicoesEmAnalise = [
      {
        id: 1,
        numero: 101,
        nomeSolicitante: "João Silva",
        nomeSistema: "Sistema A",
        descricao: "Alteração no módulo de autenticação",
        dataCriacao: "10/08/2024",
      },
      {
        id: 2,
        numero: 102,
        nomeSolicitante: "Maria Oliveira",
        nomeSistema: "Sistema B",
        descricao: "Melhoria na interface de usuário",
        dataCriacao: "12/08/2024",
      },
    ];

    setRequisicoes(requisicoesEmAnalise);
  }, []);

  return (
    <div className="m-4 p-3">
      <title>Análise de Requisições</title>
      <h1 className="mb-4">Requisições em Análise</h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Número</th>
              <th>Nome do Solicitante</th>
              <th>Nome do Sistema</th>
              <th>Descrição</th>
              <th>Data de Criação</th>
            </tr>
          </thead>
          <tbody>
            {requisicoes.length > 0 ? (
              requisicoes.map((req) => (
                <tr key={req.id}>
                  <td>{req.numero}</td>
                  <td>{req.nomeSolicitante}</td>
                  <td>{req.nomeSistema}</td>
                  <td>{req.descricao}</td>
                  <td>{req.dataCriacao}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  Nenhuma requisição em análise no momento.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analise;
