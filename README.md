# Jenkins Neo2 Theme

![license](https://img.shields.io/github/license/tobix/jenkins-neo2-theme.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)
[![Build Status](https://travis-ci.com/TobiX/jenkins-neo2-theme.svg?branch=master)](https://travis-ci.com/TobiX/jenkins-neo2-theme)

Beautify your Jenkins with the a modern flat theme!

Website: https://tobix.github.io/jenkins-neo2-theme

This started as a fork to **jenkins-neo-theme**, which itself started as a fork
to the **jenkins-material-theme**, but was developed further to work correctly
with modern versions of Jenkins.


## Features

* Just one css file
* Embed minified SVG images
* Multiple ways to install

## Screenshots

![Start page](img/screenshot1.png)![Job page](img/screenshot2.png)![Job page](img/greenscreen.png)![Job page](img/blue-greyscreen.png)![Job page](img/pinkscreen.png)![Job page](img/purplescreen.png)

## Installation

If you want to keep using an older release, replace `/dist/` in all URLs with
an older version, for example `/v0.2.0/`.

### Using this GitHub page


1. Install [Jenkins Simple Theme Plugin][simple]

2. Click `Manage Jenkins`

3. Click `Configure System` and scroll down to `Theme`

4. Choose your color for the header:

![palette](img/palette.svg)

5. Replace {{your-color-name}} in the URL by the chosen color: `https://tobix.github.io/jenkins-neo2-theme/dist/{{your-color-name}.css`.


>for example  `https://tobix.github.io/jenkins-neo2-theme/dist/blue.css`

6. Click `Save`


### Using your Jenkins Hosting

1. Follow the step 1 and 2 of the previous method

2. Download the generated URL

3. Upload the downloaded file to your web server

4. Follow the steps 3 to 7 of the previous method using your uploaded file as URL in step 6


## Development

CSS file are minified and compressed with Grunt. If you have Node & yarn
installed, you can build everything with:

```
yarn test
```

This will generate the following files, one for each {{color}}:

- dist/{{color}}.css

for example  `dist/blue.css`

## Compatibility

- Current Simple Theme plugin
- Current Jenkins LTS (older versions might still work, but compatibility isn't
  guaranteed)
- Firefox
- Chrome
- Microsoft IE11 and Edge (IE & Edge support isn't tested regularly)

If you are experiencing issues please let me know! Also, feel free to contribute!

## License

MIT License

## Thanks to

- [Jenkins neo theme][neo] for the inspiration and original work
- [Jenkins material theme][material] for the inspiration and original work
- [Simple Theme Plugin][simple] for the Simple Theme plugin
- [Google][google] for the the material design inspiration and the icons
- [Material Design Icons][material-design-icons] for some extra icons
- [canon-jenkins][canon-jenkins] for the base theme
- [@Heldroe][heldroe] for Firefox and Microsoft support

[neo]: https://github.com/jenkins-contrib-themes/jenkins-neo-theme
[material]: https://github.com/afonsof/jenkins-material-theme
[simple]: https://plugins.jenkins.io/simple-theme-plugin
[google]: https://www.google.com/design/spec/material-design/introduction.html
[material-design-icons]: https://materialdesignicons.com/
[canon-jenkins]: https://github.com/rackerlabs/canon-jenkins
[heldroe]: https://github.com/Heldroe
