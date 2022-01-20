# Tesde de Full-stack

## Repositório

O primeiro passo do projeto, é realizar um FORK deste projeto: [epicsweb/tests-jobs](https://github.com/epicsweb/tests-jobs). As definições e padrões podem ser encontradas [aqui](https://github.com/epicsweb/tests-jobs/blob/master/README.md).


## Projeto

Para iniciar o seu teste de full-stack, acesse a url para visualizar a tela: [Dribbble](https://dribbble.com/shots/10428504/attachments/2269679?mode=media)

Crie uma experiência de controle de cliente e/ou lead que contenha:
- Listagem de clientes com informações em geral
	- Exibição dos dados dos clientes
	- Botão para editar os dados
	- Botão para excluir o cliente com confirmação
- Tela de adicionar um novo cliente
- Tela de editar um cliente
	- Resgatar as informações de `last visit` e `visits` da tabela `users_visits`

## Tecnologias

O sistema deve-se utilizar as seguintes tecnologias

-  **PHP 7 ou superior:** desenvolvimento do sistema e as funções de CRUD dos Clientes
	- Utilizar framework PHP (Laravel, CodeIgniter, etc)
- **MySQL 5.7 ou superior**: criação do banco de dados
	- Lembrar de utilizar migration ou enviar o `.sql` dentro do repositório
- **Bootstrap**
	- Preferencialmente bootstrap 5
- **JavaScript**
	- Pode-se utilizar Vanilla, jQuery, VueJS ou ReactJS

## Banco de dados

- Tabela: `users`

| Campo | Tipo | Nullable |
|--|--|--|
| id | INT [PK] | Não |
| name | VARCHAR (50) | Não |
| email | VARCHAR (100) [UQ] | Não |
| picture | VARCHAR (255) | Sim |
| phone_number | CHAR (11) | Sim |
| birthdate | DATE | Sim |
| gender | ENUM | Sim |
| membership | ENUM | Não |
| ltv | FLOAT | Sim |

- Tabela: `users_visits`

| Campo | Tipo | Nullable |
|--|--|--|
| id | INT [PK] | Não |
| user_id | INT [FK] | Não |
| page | VARCHAR (255) | Não |

## Diferenciais

Os principais pontos que serão levados em consideração:

- Código limpo: não crie classes, métodos, estilos e regras no CSS sem necessidade. Utilize as classes padrões do próprio bootstrap o máximo possível;
- Fiel ao layout: quanto mais fiel o projeto for ao layout, melhor;
- Responsivo: deve ser funcional tanto no mobile quanto desktop;
- Seguir os padrões de rotas, banco de dados e afins;
- Utilização do Laravel para desenvolvimento do sistema;
- Utilizar Migration e Seeders;

**Ao terminar, enviar link do repositório (fork) no GitHub para Guilherme**
