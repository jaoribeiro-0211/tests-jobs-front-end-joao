# Tesde de Back-end

## Repositório

O primeiro passo do projeto, é realizar um FORK deste projeto: [epicsweb/tests-jobs](https://github.com/epicsweb/tests-jobs). As definições e padrões podem ser encontradas [aqui](https://github.com/epicsweb/tests-jobs/blob/master/README.md).

## Projeto

Criar uma API RESTful, deverá ser criada em PHP (preferencialmente utilize Larave/Lumen) com banco de dados em MySQL.

A documentação no [POSTMAN](https://www.postman.com/) (a collection pode ser exportada e enviada junto com o projeto ou enviar o site da mesma já publicada) será um diferencial, juntamente com testes unitários no projeto.

Não é necessário exigir autenticação das rotas, usuário ou restrição de acesso.

### Database

Crie um único banco de dados MySQL seguindo a estrutura abaixo:

-   Regras de negócio:
-   Sempre que atualizar um dado do usuário, salvar os valores modificados na tabela users_logs, utilizando os campos data_old e data_new para registrar as alterações em JSON
-   Um usuário pode ter mais que um log, mas um log pode ter somente um usuário
-   Diferenciais:
-   Campos de datestamp
-   Utilizar softdelete
-   Utilizar migration (do próprio framework PHP)
   
Tabela: `users`

| Campo | Tipo |
|--|--|
| id | INT [PK] |
| name | VARCHAR (50) |
| email | VARCHAR (100) [UQ] |
| document_number | VARCHAR (25) |
| phone_number | CHAR (11) |
| country | CHAR (2) |

Tabela: `users_logs`

| Campo | Tipo |
|--|--|
| id | INT [PK] |
| user_id | INT [FK] |
| data_old | TEXT OU JSON |
| data_new | TEXT OU JSON |

### Rotas

| Método | Rota | Ação |
| -- | -- | -- |
| GET | /users/ | Lista completa de usuários ativos |
| GET | /users/{id} | Detalhes de um único cliente com os 5 logs mais recentes |
| POST | /users/ | Insere um novo cliente |
| PUT | /users/{id} | Atualiza dados de um cliente já existente, registrando um novo log |
| DELETE | /users/{id} | Deleta um único usuário |
| GET | /logs/{start}/{limit} | Retorna lista completa de logs com paginação |
| GET | /logs/{userId}/{start}/{limit} | Retorna lista completa de logs de um único usuário com paginação |

## Diferenciais

Os principais pontos que serão levados em consideração:

1) Código limpo e o princípio de responsabilidade única;  
2) Utilização de padrões descritos pelo framework utilizado;
	- O uso do Laravel 8 e/ou PHP 8 é um diferencial também;
3) Utilização de migrations e seeders, além de uma boa documentação;
4) Boas práticas do PHP (utilização de padrões como PSR) e de banco de dados;