const request = require("supertest");
const app = require("./../app");

const unicode_text = "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।";
const krutidev_text = "Hkkjr ,d fo'kky ns'k gS tks nf{k.k ,f'k;k esa fLFkr gSA";
const chankya_text = "ÖæÚUÌ °·¤ çßàææÜ Îðàæ ãñ Áô Îçÿæ‡æ °çàæØæ ×ð´ çSÍÌ ãñÐ";

describe("KrutiDev", () => {
  describe("KrutiDev API Endpoint", () => {
    describe("POST /api/unicode-krutidev", () => {
      it("Should Bad Request", async () => {
        const res = await request(app).post("/api/unicode-krutidev").send({});
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe(true);
      });
      it("Unicode To Krutidev", async () => {
        const res = await request(app).post("/api/unicode-krutidev").send({
          text: unicode_text,
          to_font: "krutidev",
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.data.output_text).toBe(krutidev_text);
      });
      it("Krutidev To Unicode", async () => {
        const res = await request(app).post("/api/unicode-krutidev").send({
          text: krutidev_text,
          to_font: "unicode",
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.data.output_text).toBe(unicode_text);
      });
    });

    describe("POST /api/unicode-to-krutidev", () => {
      const ApiEndPoint = "unicode-to-krutidev";
      it("Should Bad Request", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({});
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe(true);
      });
      it("Unicode To Krutidev", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({
          text: unicode_text,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.data.output_text).toBe(krutidev_text);
      });
    });

    describe("POST /api/krutidev-to-unicode", () => {
      const ApiEndPoint = "krutidev-to-unicode";
      it("Should Bad Request", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({});
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe(true);
      });
      it("Unicode To Krutidev", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({
          text: krutidev_text,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.data.output_text).toBe(unicode_text);
      });
    });
  });
});

describe("Chankya", () => {
  describe("Chankya API Endpoint", () => {
    describe("POST /api/unicode-chankya", () => {
      const ApiEndPoint = "unicode-chankya";

      it("Should Bad Request", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({});
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe(true);
      });
      it("Unicode To Chankya", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({
          text: unicode_text,
          to_font: "chankya",
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.data.output_text).toBe(chankya_text);
      });
      it("Chankya To Unicode", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({
          text: chankya_text,
          to_font: "unicode",
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.data.output_text).toBe(unicode_text);
      });
    });

    describe("POST /api/unicode-to-chankya", () => {
      const ApiEndPoint = "unicode-to-chankya";
      it("Should Bad Request", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({});
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe(true);
      });
      it("Unicode To Chankya", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({
          text: unicode_text,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.data.output_text).toBe(chankya_text);
      });
    });

    describe("POST /api/chankya-to-unicode", () => {
      const ApiEndPoint = "chankya-to-unicode";
      it("Should Bad Request", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({});
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe(true);
      });
      it("Unicode To Chankya", async () => {
        const res = await request(app).post(`/api/${ApiEndPoint}`).send({
          text: chankya_text,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.data.output_text).toBe(unicode_text);
      });
    });
  });
});
