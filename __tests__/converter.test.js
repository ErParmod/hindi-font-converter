const UniToKruti = require("./../converter/uni_kruti");
const UniToChankya = require("./../converter/uni_chanakya");

const unicode_text = "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।";
const krutidev_text = "Hkkjr ,d fo'kky ns'k gS tks nf{k.k ,f'k;k esa fLFkr gSA";
const chankya_text = "ÖæÚUÌ °·¤ çßàææÜ Îðàæ ãñ Áô Îçÿæ‡æ °çàæØæ ×ð´ çSÍÌ ãñÐ";

describe("KrutiDev Converter", () => {
  describe("Func: unicode_to_krutidev_10", () => {
    it("Unicode To Krutidev", () => {
      const res = UniToKruti.unicode_to_krutidev_10(unicode_text);
      expect(res).toBe(krutidev_text);
    });
  });
  describe("Func: kruti_to_unicode", () => {
    it("Krutidev To Unicode", () => {
      const res = UniToKruti.kruti_to_unicode(krutidev_text);
      expect(res).toBe(unicode_text);
    });
  });
});

describe("Chankya Converter", () => {
  describe("Func: unicode_to_chankya", () => {
    it("Unicode To Chankya", () => {
      const res = UniToChankya.unicode_to_chankya(unicode_text);
      expect(res).toBe(chankya_text);
    });
  });
  describe("Func: chanakya_to_unicode", () => {
    it("Chankya To Unicode", () => {
      const res = UniToChankya.chanakya_to_unicode(chankya_text);
      expect(res).toBe(unicode_text);
    });
  });
});
