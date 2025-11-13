Changelogs:

1. Added Average Price by Course

Implemented a function to calculate and display the average price of dishes per course (Starters, Mains, Desserts).

Displayed results dynamically on the Home Screen using TypeScript logic and loops.

Improved user interface layout to clearly show total dishes and average prices.

2. Created Separate “Add Menu” Screen

Moved the add menu form from the Home Screen to its own dedicated screen called AddMenuScreen.

Chef can now:

Add dishes with name, description, course, and price inputs.

See a live preview of the current menu items.

Navigate back to Home after saving a new dish.

3. Implemented Array Storage and Item Removal

All menu items are stored in an array (using useState) to simulate a dynamic data list.

Added a remove button beside each dish for the chef to delete unwanted menu items.

Improved error handling for missing or invalid inputs.

4. Added Filter Menu Screen for Guests

Created a new screen (FilterMenuScreen) where guests can view dishes by course type.

Added buttons for All, Starters, Mains, Desserts filtering.

The list automatically updates according to the selected filter.

Navigation between Home → FilterMenu and back implemented.

5. Improved UI & Code Structure

Applied consistent layout spacing, color scheme, and fonts across all screens.

Used multiple screens and functions to organize the app (following refactoring goals).

Simplified code using functions, arrays, and loops for better readability.

Removed unused or repetitive code for optimization.
