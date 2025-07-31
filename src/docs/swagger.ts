import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: "v0.0.1",
        title: "Documentasi API ACARA",
        description: "Dokumentasi API ACARA",
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local Server",
        },
        {
            url: "https://back-end-acara-ok.vercel.app/api",
            description: "Deploy Server",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            LoginRequest: {
                identifier: "ikhsan",
                password: "12345678",
            },
            RegisterRequest: {
                fullName: "joni",
                username: "joni2024",
                email: "joni2024@yopmail.com",
                password: "12345678",
                confirmPassword: "12345678",
            },
            ActivationRequest: {
                code: "abcdef",
            },
        },
    },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({openapi: "3.0.0"}) (outputFile, endpointsFiles, doc);