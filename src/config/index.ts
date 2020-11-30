import dotenv from 'dotenv-safe';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({
  allowEmptyValues: true,
  example: '.env.example',
  path: `.env.${process.env.NODE_ENV}`,
});

export default {
  port: parseInt(process.env.PORT, 10),
};
