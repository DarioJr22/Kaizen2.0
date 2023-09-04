export interface Message{
  description?:MessageDescriptions | string |any;
  type?:MessageTypes| string | any;
}

export enum MessageTypes{
  sucsess = 'sucsess',
  warn = 'warn',
  error = 'error'

}

export enum MessageDescriptions {
  ERRO_SALVAR = 'Erro ao salvar',
  //Estado do campo
  CAMPO_VAZIO = 'Campo obrigatário não informado',
  CAMPO_OBRIGATORIO='Campo obrigatório ',
  CAMPO_INVALID='Campo inválido !',
  CAMPO_VALIDO='Campo válido !',

  //Tamanho do campo
  MIN_LENGTH = 'O tamanho minimo do campo não foi atingido.',
  MAX_LENGTH = 'O tamanho máximo do campo não foi atingido.',

  //Validação de email
  EMAIL_INVALIDO = 'Email inválido.',
  EMAIL_VALIDO = 'Email válido.',

  //Validação de CPF
  CPF_INVALIDO = 'CPF inválido.',
  CPF_VALIDO = 'CPF válido.',

  //Validação de CNPJ
  CNPJ_INVALIDO = 'CNPJ inválido.',
  CNPJ_VALIDO = 'CNPJ válido.',

  //Validação de data
  DATA_INVALIDA = 'Data inválida.',
  DATA_VALIDA = 'Data válida.',

  //Validação de telefone
  TELEFONE_INVALIDO = 'Telefone inválido.',
  TELEFONE_VALIDO = 'Telefone válido.',

  //Sucesso

  SUCESSO = 'Processo realizado com sucesso.',

  //Warning
  WARN = 'Atenção !',
  WARN_SEM_DADOS = 'Nenhum dado foi encontrado',


  //Erro
  ERRO_LOGIN = 'Usuário ou senha inválidos.',

  //Tela Crud Todo List
  ERRO_CONSULTA = 'Erro ao Realizar consulta !',

  //
  ERROLOUCO = "AAASDAS"
}
