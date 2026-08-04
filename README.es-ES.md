

# astro-vim

> [!NOTE]
> **AVISO**: ¡La renderización de la barra de estado ~~no~~ funciona ~~pero~~ y los comandos funcionan!

¡Bienvenido a la plantilla de página astro-vim! Este proyecto combina el poder de Astro con la eficiencia de los atajos de teclado de Vim para crear una experiencia de navegación única y rápida. 

<p align="center">
    <img src="public/astro-vim.png" alt="logo" width="100"/>
</p>

![](.assets/demo.gif)

## Tabla de Contenidos

- [Instalación](#installation)
- [Ejecutar el Proyecto](#running-the-project)
- [Estructura del Proyecto](#project-structure)
- [Personalización](#customization)
- [Uso de los Atajos de Teclado de Vim](#using-vim-key-bindings)
- [Generación de Nuevo Contenido](#generating-new-content)
- [Licencia](#license)

## Instalación

Para comenzar con este proyecto, necesitas tener Node.js instalado. Luego, puedes clonar este repositorio e instalar las dependencias necesarias:

```sh
git clone https://github.com/albertoperdomo2/astro-vim.git
cd astro-vim 
npm install
```

## Ejecutar el Proyecto

Después de instalar las dependencias, puedes iniciar el servidor de desarrollo con el siguiente comando:

```sh
npm start
```

Esto iniciará el servidor de desarrollo de Astro y podrás ver el sitio navegando a `http://localhost:3000` en tu navegador web.

## Estructura del Proyecto

A continuación se muestra un resumen de la estructura del proyecto:

```
.
├── README.md
├── astro.config.mjs
├── node_modules
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── KeyBindings.astro
│   │   ├── SearchBar.astro
│   │   ├── Sidebar.astro
│   │   └── StatusBar.astro
│   ├── content
│   │   ├── blog  # blogs go here
│   │   │   ├── astro-vim-ai.md
│   │   │   └── md-features.md
│   │   └── config.ts
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   ├── about.astro
│   │   ├── api
│   │   │   └── blog-posts.json.ts
│   │   ├── blog
│   │   │   └── [slug].astro
│   │   ├── blog.astro
│   │   ├── contact.astro
│   │   ├── exited.astro
│   │   ├── help.astro
│   │   └── index.astro
│   ├── scripts
│   │   ├── navigation.ts  # key bindings logic
│   │   └── search.ts # search logic
│   └── styles
│       └── global.css
├── tailwind.config.cjs
└── tsconfig.json
```

- **public/**: Recursos estáticos como el favicon.
- **src/components/**: Componentes de interfaz de usuario reutilizables.
- **src/content/**: Archivos Markdown para publicaciones del blog y otro contenido.
- **src/layouts/**: Componentes de diseño para las páginas.
- **src/pages/**: Componentes de página.
- **src/scripts/**: Scripts personalizados.
- **src/styles/**: Configuración de Tailwind CSS y estilos personalizados.

## Personalización

### Tailwind CSS

Este proyecto utiliza Tailwind CSS para el estilizado. Puedes personalizar los estilos editando el archivo `tailwind.config.cjs` y agregando tus estilos personalizados en el directorio `src/styles`.

### Contenido

El contenido se gestiona a través de archivos Markdown ubicados en el directorio `src/content`. Puedes crear nuevas publicaciones del blog o páginas agregando nuevos archivos `.md` en los subdirectorios correspondientes.

## Uso de los Atajos de Teclado de Vim

Esta plantilla admite atajos de teclado similares a Vim para la navegación:

- Presiona `j` para moverte hacia abajo.
- Presiona `k` para moverte hacia arriba.
- Presiona `u` para navegar un nivel hacia arriba.

Estos atajos de teclado mejoran la eficiencia de navegación, especialmente para usuarios familiarizados con Vim.

## Generación de Nuevo Contenido

Para generar nuevo contenido para el blog, simplemente agrega un nuevo archivo markdown en el directorio `src/content`. Por ejemplo:

```markdown
---
title: "New Blog Post"
date: 2024-08-02T04:14:54-08:00
author: "Anon"
summary: "A summary of your new blog post."
---

# New Blog Post

Content of your new blog post goes here.
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

No dudes en personalizar esta plantilla según tus necesidades y asegúrate de contribuir si así lo deseas. ¡Feliz programación!
