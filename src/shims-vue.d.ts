declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// env.d.ts or another .d.ts file in your project
declare module 'vue-scroll-ease' {
    import { Plugin } from 'vue';
    const VueScrollEase: Plugin;
    export default VueScrollEase;
}
