import { applyDecorators, UseGuards } from "@nestjs/common";
import { Roles } from "./roles.decorator";
import { AuthGuard } from "src/guards/auth.guard";
import { RolesGuard } from "src/guards/roles.guard";
import { ROLES } from "../constants/roles.constants";

export const Auth = (...roles: ROLES[]) => {
    roles.push(ROLES.ADMIN);
    return applyDecorators(
            Roles(roles),
            UseGuards(AuthGuard, RolesGuard)
        )
    }
