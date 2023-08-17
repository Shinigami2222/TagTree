# Nested Tags Tree UI

The Nested Tags Tree UI is a React application that allows users to create and manage a nested tree structure of tags. This README provides an overview of the project, installation instructions, and key features.

## Table of Contents

- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [Components](#components)
- [Exporting Data](#exporting-data)
- [Styling](#styling)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation and Setup

1. **Prerequisites:**
   - Node.js and npm installed on your machine.

2. **Project Setup:**
   - Clone this repository: `git clone https://github.com/Shinigami2222/TagTree.git`
   - Navigate to the project folder: `cd tagtree`
   - Install dependencies: `npm install`

3. **Running the Application:**
   - Start the development server: `npm start`
   - Open your browser and go to `http://localhost:3000`

## Project Structure

- The project is organized into components for easy management.
- Each tag is represented by a `TagView` component and can have child tags represented by `TagChildren` components.
- Styling is managed using CSS Modules for a modular approach.

## Components

### TagView Component

- Displays an individual tag's name and data.
- Features:
  - Editing tag name by clicking on it.
  - Collapsing/expanding child tags.
  - Adding child tags.
  - Editing tag data.

### TagChildren Component

- Renders child tags within a `TagView`.
- Supports recursive rendering for nested tags.

## Exporting Data

- Click the "Export" button to export the current tree structure to JSON format.
- The exported data matches the current expanded/collapsed state of the tree.

## Styling

- CSS Modules are used for styling.
- Components have their own CSS files for better organization.
- Supports both light and dark themes.

## Deployment

1. Prepare for Deployment:
   - Optimize your application for production.
   - Test thoroughly.

2. Choose a Hosting Service:
   - Deploy to a web hosting service of your choice (e.g., GitHub Pages, Netlify).

## Usage

1. Create and manage tags using the user-friendly UI.
2. Collapse/expand tags by clicking on the arrows.
3. Edit tag names by clicking on them.
4. Add child tags using the "Add Child" button.
5. Export the tree structure to JSON using the "Export" button.

## Contributing

Contributions are welcome! If you find any issues or want to improve the project, feel free to submit a pull request.

