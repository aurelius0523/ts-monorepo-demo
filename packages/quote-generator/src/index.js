"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchQuote = void 0;
const fetchQuote = () => __awaiter(void 0, void 0, void 0, function* () {
    const jsonResponse = yield fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
            "X-Api-Key": "78cOyHckM/msYdOX7cQeWA==iK1x1BGnT51K02rA",
        },
    });
    const jsonData = yield jsonResponse.json();
    console.log(jsonData[0].quote);
});
exports.fetchQuote = fetchQuote;
