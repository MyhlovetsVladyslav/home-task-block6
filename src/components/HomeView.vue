<template>
    <main>
        <h1>Главная</h1>
        <section>
                <li>
                    <router-link :to="{ name: 'logined' }">Юзер</router-link>
                </li>
        </section>
    </main>
</template>