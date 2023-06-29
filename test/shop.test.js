import Shop from '../src/Shop';
import Item from '../src/Item';

describe('Gilded Rose', () => {
  it('can cover a normal product', () => {
    let normal = new Item('normal', 10, 20);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('normal')
    expect(shop.items[0].sellIn).toEqual(9);
    expect(shop.items[0].quality).toEqual(19);
  });

  it('can degrade twice when date has passed', () => {
    let normal = new Item('normal', 0, 10);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('normal')
    expect(shop.items[0].sellIn).toEqual(-1);
    expect(shop.items[0].quality).toEqual(8);
  });

  it('cannot make quality negative when date has not passed', () => {
    let normal = new Item('normal', 1, 0);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('normal')
    expect(shop.items[0].sellIn).toEqual(0);
    expect(shop.items[0].quality).toEqual(0);
  });

  it('cannot make quality negative when date has passed', () => {
    let normal = new Item('normal', 0, 2);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('normal')
    expect(shop.items[0].sellIn).toEqual(-1);
    expect(shop.items[0].quality).toEqual(0);
  });

  it('can increase the quality of Aged Brie', () => {
    let normal = new Item('Aged Brie', 10, 2);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Aged Brie')
    expect(shop.items[0].sellIn).toEqual(9);
    expect(shop.items[0].quality).toEqual(3);
  });

  it('can increase the quality of Aged Brie when less than 0 days', () => {
    let normal = new Item('Aged Brie', 0, 2);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Aged Brie')
    expect(shop.items[0].sellIn).toEqual(-1);
    expect(shop.items[0].quality).toEqual(4);
  });

  it('can increase the quality of Aged Brie to the boundary of 50', () => {
    let normal = new Item('Aged Brie', 10, 49);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Aged Brie')
    expect(shop.items[0].sellIn).toEqual(9);
    expect(shop.items[0].quality).toEqual(50);
  })

  it('cannot make quality more than 50', () => {
    let normal = new Item('Aged Brie', 10, 50);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Aged Brie')
    expect(shop.items[0].sellIn).toEqual(9);
    expect(shop.items[0].quality).toEqual(50);
  })

  it('cannot sell the Sulfuras, Hand of Ragnaros', () => {
    let normal = new Item('Sulfuras, Hand of Ragnaros', 10, 0);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(shop.items[0].sellIn).toEqual(10);
    expect(shop.items[0].quality).toEqual(0);
  });

  it('cannot decrease the quality of the Sulfuras, Hand of Ragnaros', () => {
    let normal = new Item('Sulfuras, Hand of Ragnaros', 0, 20);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(shop.items[0].sellIn).toEqual(0);
    expect(shop.items[0].quality).toEqual(20);
  });

  it('can increase the quality of Backstage passes to a TAFKAL80ETC concert', () => {
    let normal = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 2);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(shop.items[0].sellIn).toEqual(10);
    expect(shop.items[0].quality).toEqual(3);
  });

  it('can increase twice the quality of Backstage passes to a TAFKAL80ETC concert when equal 10 days', () => {
    let normal = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 2);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(shop.items[0].sellIn).toEqual(9);
    expect(shop.items[0].quality).toEqual(4);
  });

  it('can increase twice the quality of Backstage passes to a TAFKAL80ETC concert when less than 10 days', () => {
    let normal = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 5);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(shop.items[0].sellIn).toEqual(8);
    expect(shop.items[0].quality).toEqual(7);
  });

  it('can increase twice the quality of Backstage passes to a TAFKAL80ETC concert when more than 5 days', () => {
    let normal = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(shop.items[0].sellIn).toEqual(5);
    expect(shop.items[0].quality).toEqual(50);
  });

  it('can increase thrice the quality of Backstage passes to a TAFKAL80ETC concert when equal 5 days', () => {
    let normal = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(shop.items[0].sellIn).toEqual(4);
    expect(shop.items[0].quality).toEqual(8);
  });

  it('can increase twice the quality of Backstage passes to a TAFKAL80ETC concert when less than 5 days', () => {
    let normal = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 49);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(shop.items[0].sellIn).toEqual(3);
    expect(shop.items[0].quality).toEqual(50);
  });

  it('can increase thrice the quality of Backstage passes to a TAFKAL80ETC concert when less than 5 days', () => {
    let normal = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 1);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(shop.items[0].sellIn).toEqual(0);
    expect(shop.items[0].quality).toEqual(4);
  });

  it('can drop the quality of Backstage passes to a TAFKAL80ETC concert when 0 days', () => {
    let normal = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10);
    let shop = new Shop([normal]);
    shop.updateQuality();

    expect(shop.items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(shop.items[0].sellIn).toEqual(-1);
    expect(shop.items[0].quality).toEqual(0);
  });
})

