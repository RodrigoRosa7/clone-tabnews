# clone-tabnews

Repositório de clone do tabnews para o curso.dev

Iniciar o banco de dados
docker compose -f infra/compose.yaml up -d

Derrubar o banco de dados
docker compose -f infra/compose.yaml down

Vizualiza quais containers estão rodando
docker ps --all

Iniciar o backend
npm run dev

Iniciar os testes
npm run test:watch
