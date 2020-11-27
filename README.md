### Requirements

+ [NodeJS](https://nodejs.org/) latest stable version
+ If you don't have yarn, run `npm i -g yarn`
+ Installed dependencies `yarn`
+ .env file (You can use .env.default)

### FAQ

+ How to run dev server?

`yarn start`

+ How to run project build?

`yarn build`

+ Shorthands for block/component/page

`node make block blockName [--js]`

`node make component componentName [--js]`

`node make page pageName [--js]`

`[--js]` - option to generate .js file

# Project structure

```
├── app/                                  # Source files
│   ├── blocks/
│   │   └── blockName/
│   │       ├── blockName.pug             # Block markup
│   │       ├── blockName.scss            # Block styles
│   │       └── blockName.js              # Block scripts
│   ├── components/
│   │   └── componentName/
│   │       ├── componentName.pug
│   │       ├── componentName.scss
│   │       └── componentName.js
│   ├── data/                             # Data for layout in JSON format
│   ├── layouts/                          # Extendable templates
│   │   ├── default.pug
│   │   └── head.pug                      # <head> markup
│   ├── pages/
│   │   └── pageName/
│   │       ├── pageName.pug
│   │       ├── pageName.scss
│   │       └── pageName.js
│   ├── scripts/                          # Scripts
│   │   └── app.js                        # Main script
│   ├── styles/                           # Styles
│   │   ├── helpers/
│   │   │   ├── fonts.scss
│   │   │   ├── mixins.scss
│   │   │   └── variables.scss
│   │   └── app.scss                      # Main stylesheet
│   ├── static/                           # Static files
│   │   ├── icons/                        # Icons for SVG sprite
│   │   ├── images/
│   │   │   ├── static/                   # images that will be needed for backend
│   │   │   └── content/                  # Replaceable content pictures
│   │   └── misc/                         # Files for project root (favicon.ico) etc.
├── dist/                                 # Built project
```
