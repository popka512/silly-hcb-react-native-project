
import { Router } from 'express';


const router = Router();

router.get('/', (req, res) => {
    res.json({ success: true, data: { status: 'online' } });
});
export default router;
