"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var crypto = require("crypto");
var axios = require("axios");
exports.createMomoPayment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var amount, partnerCode, accessKey, secretKey, orderId, requestId, redirectUrl, ipnUrl, orderInfo, requestType, extraData, rawSignature, signature, body, _momoRes$data, momoRes, _err$response, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          amount = req.body.amount;
          partnerCode = process.env.MOMO_PARTNER_CODE;
          accessKey = process.env.MOMO_ACCESS_KEY;
          secretKey = process.env.MOMO_SECRET_KEY;
          orderId = "ORDER-".concat(Date.now());
          requestId = "".concat(partnerCode, "-").concat(Date.now());
          redirectUrl = "http://localhost:5173/payment-success"; // frontend
          ipnUrl = "https://webhook.site/your-temp-url"; // bạn có thể tạo URL mới ở webhook.site
          orderInfo = "Thanh toán đơn hàng tại Smartphone Store";
          requestType = "captureWallet";
          extraData = ""; // nếu cần truyền thêm gì thì mã hóa base64
          // Tạo rawSignature đúng thứ tự
          rawSignature = "accessKey=".concat(accessKey, "&amount=").concat(amount, "&extraData=").concat(extraData, "&ipnUrl=").concat(ipnUrl, "&orderId=").concat(orderId, "&orderInfo=").concat(orderInfo, "&partnerCode=").concat(partnerCode, "&redirectUrl=").concat(redirectUrl, "&requestId=").concat(requestId, "&requestType=").concat(requestType);
          signature = crypto.createHmac("sha256", secretKey).update(rawSignature).digest("hex");
          body = {
            partnerCode: partnerCode,
            accessKey: accessKey,
            requestId: requestId,
            amount: String(amount),
            // phải là chuỗi
            orderId: orderId,
            orderInfo: orderInfo,
            redirectUrl: redirectUrl,
            ipnUrl: ipnUrl,
            extraData: extraData,
            requestType: requestType,
            signature: signature,
            lang: "vi"
          };
          _context.p = 1;
          _context.n = 2;
          return axios.post("https://test-payment.momo.vn/v2/gateway/api/create", body, {
            headers: {
              "Content-Type": "application/json"
            }
          });
        case 2:
          momoRes = _context.v;
          if (!((_momoRes$data = momoRes.data) !== null && _momoRes$data !== void 0 && _momoRes$data.payUrl)) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.json({
            payUrl: momoRes.data.payUrl
          }));
        case 3:
          console.error("Momo trả về lỗi:", momoRes.data);
          return _context.a(2, res.status(400).json({
            message: "Momo trả về lỗi",
            data: momoRes.data
          }));
        case 4:
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error("Lỗi gọi Momo:", (_t === null || _t === void 0 || (_err$response = _t.response) === null || _err$response === void 0 ? void 0 : _err$response.data) || _t.message);
          res.status(500).json({
            message: "Không thể tạo yêu cầu thanh toán Momo"
          });
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[1, 5]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();