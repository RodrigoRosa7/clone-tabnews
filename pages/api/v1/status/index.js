function Status(request, response) {
  response.status(200).json({ chave: "Alunos estão Online" });
}

export default Status;
