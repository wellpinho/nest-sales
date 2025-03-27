import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/db.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.development.local', '.env.development'],
        }),
        UserModule,
        DatabaseModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
