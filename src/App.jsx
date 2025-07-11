import React from 'react';
import './App.css';

// Lucide React icons - using inline SVG fallback for simplicity in a single file
// In a real app, you'd import these from 'lucide-react'
const FileText = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
);
const PackageCheck = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 2 2 4-4"/><path d="M7 6H5a2 2 0 0 0-2 2v3.5A2.5 2.5 0 0 1 5.5 14h0A2.5 2.5 0 0 1 8 11.5V6h3l2-3h6l2 3h-3"/></svg>
);
const Repeat = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 2H10a5 5 0 0 0-4.5 3h.5A3.5 3.5 0 0 1 7 7v10a3.5 3.5 0 0 1-3.5 3.5H3a5 5 0 0 0 4.5 3H17a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"/></svg>
);
const Stethoscope = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11.3 18.7a2 2 0 0 1-2.7 2.7L3 15"/><path d="m18 12-6 6-4-4"/><path d="M18 12a6 6 0 0 0-6-6H6"/><path d="M6 8V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2"/></svg>
);
const Box = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M7 3v18"/><path d="M3 7h18"/><path d="M3 17h18"/><path d="M17 3v18"/></svg>
);
const Tag = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414L12.586 22.414a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828L12.586 2.586Z"/><circle cx="8" cy="8" r="2"/></svg>
);
const Printer = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M18 14V9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5"/><path d="M10 4h4v3h-4Z"/></svg>
);
const Lock = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const CloudOff = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 14.5a3 3 0 1 0-4.5-4.5"/><path d="M22 12a10 10 0 0 0-20 0"/><path d="m2 2 20 20"/></svg>
);
const Target = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const Settings = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.73l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0-2.73l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <header className="text-center mb-10 md:mb-16 bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-700 mb-4 leading-tight">
          Sistema de Controle de Dispensação de Medicamentos de Alto Custo
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Gerenciamento eficiente e otimizado da dispensação de medicamentos em ambiente SUS/CEAF (São Paulo).
        </p>
      </header>

      {/* Objective and Environment Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-16">
        {/* Objetivo */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="p-4 bg-indigo-100 rounded-full mb-4">
            <Target className="text-indigo-600 w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Objetivo do Sistema</h2>
          <p className="text-gray-700 leading-relaxed">
            Desenvolver um sistema local (offline) para controlar e organizar a dispensação de medicamentos de alto custo,
            otimizando a rotina do responsável técnico em unidades SUS/CEAF no estado de São Paulo.
          </p>
        </div>

        {/* Ambiente de Execução */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="p-4 bg-purple-100 rounded-full mb-4">
            <CloudOff className="text-purple-600 w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-purple-700 mb-3">Ambiente de Execução</h2>
          <p className="text-gray-700 leading-relaxed">
            Totalmente local (offline), executado em WampServer (PHP + MySQL) com interface web via navegador.
            Acesso seguro com login e senha para administrador único.
          </p>
        </div>
      </section>

      {/* Core Functionalities Section */}
      <section className="mb-10 md:mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8 sm:mb-10">Funcionalidades Principais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Funcionalidade 1: Importação do PDF Mensal */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            <div className="p-3 bg-blue-100 rounded-full mb-4">
              <FileText className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Importação do PDF Mensal</h3>
            <p className="text-gray-600 text-sm mb-4">
              Importe listas de pacientes e medicamentos via PDF. O sistema extrai automaticamente dados cruciais como
              nome, CID, medicamento, quantidade e validade, populando o painel do mês atual.
            </p>
            <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Importar PDF
            </button>
          </div>

          {/* Funcionalidade 2: Marcação de Retirada */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            <div className="p-3 bg-green-100 rounded-full mb-4">
              <PackageCheck className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Controle de Retirada Mensal</h3>
            <p className="text-gray-600 text-sm mb-4">
              Marque pacientes como "Retirou" ou "Não Retirou" para um controle preciso.
              Pacientes que não retiraram no mês anterior são ocultados, mantendo um histórico completo.
            </p>
            <div className="flex space-x-2 mt-auto">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out">
                Marcar como Retirou
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out">
                Marcar como Não Retirou
              </button>
            </div>
          </div>

          {/* Funcionalidade 3: Controle de Ciclo de 6 Meses e Recibos */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            <div className="p-3 bg-yellow-100 rounded-full mb-4">
              <Repeat className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ciclo de 6 Meses e Renovação</h3>
            <p className="text-gray-600 text-sm mb-4">
              Monitore a validade de 6 meses de cada paciente. O sistema alerta sobre o último mês de validade e
              gera automaticamente recibos de renovação pré-preenchidos, incluindo exames exigidos por CID e medicamento.
            </p>
            <button className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out">
              Gerar Recibo de Renovação
            </button>
          </div>

          {/* Funcionalidade 4: Regras de Exames/Documentos */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            <div className="p-3 bg-purple-100 rounded-full mb-4">
              <Stethoscope className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Regras de Exames/Documentos</h3>
            <p className="text-gray-600 text-sm mb-4">
              Base de dados local com regras de exames por CID e medicamento, extraídas de fontes oficiais.
              As regras são aplicadas automaticamente, com possibilidade de edição manual antes da impressão.
            </p>
            <button className="mt-auto bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out">
              Gerenciar Regras
            </button>
          </div>

          {/* Funcionalidade 5: Fechamento do Mês (Malote) */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            <div className="p-3 bg-red-100 rounded-full mb-4">
              <Box className="text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fechamento do Mês (Malote)</h3>
            <p className="text-gray-600 text-sm mb-4">
              Gere relatórios completos para o malote mensal, incluindo processos iniciais, renovações,
              recibos de retiradas, "fora de malote", aguardando retirada por UBS e medicamentos devolvidos.
            </p>
            <button className="mt-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out">
              Gerar Malote
            </button>
          </div>

          {/* Funcionalidade 6: Etiquetas e Bilhetes */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            <div className="p-3 bg-orange-100 rounded-full mb-4">
              <Tag className="text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Etiquetas e Bilhetes</h3>
            <p className="text-gray-600 text-sm mb-4">
              Automatize a geração de etiquetas para medicamentos do malote atual e bilhetes de renovação para
              pacientes na última dispensação do mês.
            </p>
            <div className="flex space-x-2 mt-auto">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out">
                Imprimir Etiquetas
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out">
                Imprimir Bilhetes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="mb-10 md:mb-16 bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Relatórios Abrangentes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Processos iniciais",
            "Renovações",
            "Recibos ativos",
            "Fora de malote",
            "Aguardando retirada por UBS",
            "Medicamentos devolvidos",
          ].map((report, index) => (
            <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg shadow-sm">
              <Printer className="text-gray-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium text-sm">{report}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600 mb-3">Exportação disponível nos formatos:</p>
          <div className="flex justify-center space-x-4">
            <span className="bg-gray-200 text-gray-700 font-semibold py-1.5 px-4 rounded-full text-sm">.docx</span>
            <span className="bg-gray-200 text-gray-700 font-semibold py-1.5 px-4 rounded-full text-sm">.pdf</span>
            <span className="bg-gray-200 text-gray-700 font-semibold py-1.5 px-4 rounded-full text-sm">.xlsx</span>
          </div>
        </div>
      </section>

      {/* Security and Access Section */}
      <section className="mb-10 md:mb-16 bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 bg-gray-100 rounded-full mr-4">
            <Lock className="text-gray-600 w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-700">Segurança e Acesso</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Controle de Acesso</h3>
            <p className="text-gray-600 text-sm">
              Sistema com login único para administrador responsável técnico. Acesso protegido por senha com sessão segura.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Dados Locais</h3>
            <p className="text-gray-600 text-sm">
              Todos os dados permanecem no servidor local, garantindo privacidade e conformidade com regulamentações de saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="mb-10 md:mb-16 bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full mr-4">
            <Settings className="text-blue-600 w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-blue-700">Configurações do Sistema</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Personalização</h3>
            <p className="text-blue-600 text-sm">
              Configure regras específicas da unidade, modelos de documentos e preferências de relatórios.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Backup Automático</h3>
            <p className="text-blue-600 text-sm">
              Sistema de backup automático dos dados para garantir a integridade das informações.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Atualizações</h3>
            <p className="text-blue-600 text-sm">
              Atualizações periódicas das regras de exames e medicamentos conforme diretrizes oficiais.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center bg-white p-6 rounded-2xl shadow-lg">
        <p className="text-gray-600 mb-2">
          Sistema desenvolvido para otimizar a gestão de medicamentos de alto custo em unidades SUS/CEAF
        </p>
        <p className="text-gray-500 text-sm">
          Ambiente local seguro • Interface responsiva • Relatórios completos
        </p>
      </footer>
    </div>
  );
};

export default App;

