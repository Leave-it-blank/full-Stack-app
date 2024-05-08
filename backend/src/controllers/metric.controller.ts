import { Request, Response } from "express";
import { prisma } from "../server";

const countByModel = async (req: Request, res: Response) => {
  try {
    const { model } = req.body ?? "Student";
    const metricsCountByModel = await prisma.apiMeter.findFirst({
      where: {
        model: model,
      },
    });
    if (!metricsCountByModel) {
      res.status(404).json({
        error: `Model ${model} not found. Did you create/update any records?`,
      });
      return;
    }

    res.status(200).json(metricsCountByModel);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  countByModel,
};
