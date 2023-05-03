import { Success } from './success.model';
export declare class SuccessController {
    getAllSuccess(): Success[];
    createSuccess(id: number, timeTakenMs: number, created_at: Date): Success;
}
