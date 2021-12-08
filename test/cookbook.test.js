const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe('salad', ['tomato', 'lettuce', 'eggs', 'cucumber']);
       expect(myCookbook.recipes).toEqual({cookie: ['egg', 'flour', 'sugar', 'chocolate']});

    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {

     const myCookbook = new Cookbook();
      myCookbook.addRecipe('salad', ['tomato', 'lettuce', 'eggs', 'cucumber']);
      myCookbook.addRecipe('cookie',['flour','milk','eggs']);

      const myReceipes = myCookbook.listRecipes();

      expect(myReceipes).toEqual(['salad','cookie']);

    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
