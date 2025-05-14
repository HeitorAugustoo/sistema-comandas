import path from "path";

export const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "API - Comandas",
        version: "1.0.0",
        description: "Documentação da API do sistema de comandas para restaurantes."
    },
    paths: {
        "/": {
            get: {
                sumary: "Status da API",
                responses: {
                    200: {
                        description: "API funcionando corretamente."
                    }
                }
            }
        }
    }
}