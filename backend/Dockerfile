FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev \
    libzip-dev libpng-dev \
    && docker-php-ext-install pdo pdo_pgsql

RUN apt-get update && apt-get install -y \
        git \
        curl \
        zip \
        unzip \
        libpq-dev \
        libzip-dev \
        libpng-dev && \
        docker-php-ext-install pdo && \
        docker-php-ext-install pdo_pgsql && \
        docker-php-ext-install zip

# Копируем Composer из официального образа Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Устанавливаем рабочую директорию
WORKDIR /var/www

COPY . .

RUN composer install

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]

EXPOSE 8000