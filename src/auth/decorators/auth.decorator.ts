import { applyDecorators, UseGuards } from "@nestjs/common";
import { Roles } from "./roles.decorator";
import { AuthGuard } from "src/guards/auth.guard";
import { RolesGuard } from "src/guards/roles.guard";

export const Auth = (...roles: string[]) => {
    roles.push("Admin");
    return applyDecorators(
            Roles(roles),
            UseGuards(AuthGuard, RolesGuard)
        )
    }
