import {  Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req:Request, res:Response):Promise<Response> {
    try {
        const { orderId } = req.params;
        const { status } = req.body;


        if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
            return res.status(400).json({
                error:'Status should be one of theese:WAITING, IN_PRODUCTION, DONE'
            });
        }

        await Order.findByIdAndUpdate(orderId, { status });

        return res.sendStatus(204);

    } catch (error) {
        console.error(error);
        return res.status(500).json({error:'Internal Server Error'});
    }
}
