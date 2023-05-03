"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessController = void 0;
const common_1 = require("@nestjs/common");
let SuccessController = class SuccessController {
    getAllSuccess() {
        return [
            {
                id: 1,
                timeTakenMs: 1000,
                created_at: new Date(),
            },
        ];
    }
    createSuccess(id, timeTakenMs, created_at) {
        return {
            id: id,
            timeTakenMs: timeTakenMs,
            created_at: created_at,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], SuccessController.prototype, "getAllSuccess", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Date]),
    __metadata("design:returntype", Object)
], SuccessController.prototype, "createSuccess", null);
SuccessController = __decorate([
    (0, common_1.Controller)('success')
], SuccessController);
exports.SuccessController = SuccessController;
//# sourceMappingURL=success.controller.js.map