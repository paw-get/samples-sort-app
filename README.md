## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [What's next?](#whats-next)

## General info

Imagine a sample sorter: a machine that is responsible for placing a test tube into one of many racks.
This machine can recognize the test tube (read its id) and place it into the specified rack.
Application allows the user to insert a list of test tubes, and
then it will assign them to racks based on the following logic:

1. Each tube contains a material for a specific patient
2. It is illegal to place patients of the same age into the same rack
3. It is illegal to place patients working in the same company into the same rack
4. It is illegal to place patients who live in the same city district into the same rack
5. It is illegal to place patients with the same vision defect into the same rack
6. The number of racks is very limited

## Technologies

Project is created with:

- React: 18.2.0
- TypeScript: 5.2.2
- Sass: 1.70.0
- MUI (data-grid): 6.19.4
- Vite: 5.1.0
- Vitest: 0.34.6

## Setup

Clone project repository using git:

```
$ git clone git@github.com:paw-get/samples-sort-app.git
```

To run this project, run npm command (it will install all dependencies and run app):

```
$ cd ../app_folder
$ npm run dev
```

To run tests, use npm command:

```
$ cd ../app_folder
$ npm run test
```

## What's next?

- Adding storage for previously created racks [e.g. redux]
- Creating feature for two step imported data submittion
- Styling created components
- Adding responsiveness
