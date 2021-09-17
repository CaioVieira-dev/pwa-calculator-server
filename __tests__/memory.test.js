const request = require('supertest')

const app = require('../app')

describe("API",()=>{
    it("should get the memory values", async ()=>{
        const response = await request(app).get("/api/memory")
        
        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
    })

    it("should not add a calculation to memory if the request body is empty",async ()=>{
        const response = await request(app).post("/api/add-memory").send()
        
        expect(response.status).toBe(400)
    })

    it("should receive a new memory when a calculation is added", async ()=>{
        const req = {memory:"5 X 5 = 25"}
        
        const response = await request(app).post("/api/add-memory").send(req)
        
        expect(response.status).toBe(200)
        expect(response.body).toContain("5 X 5 = 25")
    })

})