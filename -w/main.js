// Generated by CoffeeScript 2.3.2
(function() {
  var a, abla, array, b, book, bool, ele, elem, func, hello, hey, i, j, len, name, page, prime, range, range2, range3, state, str, str2, str3, str4, string, user;

  console.log('Cofee');

  a = 10;

  b = 10;

  bool = true;

  string = '\nIrure laborum eiusmod labore duis nisi exercitation id voluptate et labore sunt excepteur quis mollit. \nSit irure qui commodo ea. Excepteur eiusmod sunt in est. Reprehenderit nulla voluptate laborum veniam eiusmod \nincididunt laboris officia amet consectetur nostrud amet. \nNulla ad deserunt culpa nisi dolore voluptate sunt do deserunt ut aliqua commodo amet.\n\nAnim adipisicing ea esse irure veniam nulla minim nulla enim. Ea reprehenderit ex culpa elit deserunt ex esse deserunt consequat sint. \nNulla amet exercitation esse excepteur. Ullamco velit enim incididunt sunt ex irure non occaecat. Irure deserunt commodo ullamco pariatur. \nDolore occaecat irure culpa pariatur consequat magna enim eu labore.\n\nMollit consectetur esse Lorem sunt laboris dolor ex ad aliquip ex. Nisi eu excepteur do ea cupidatat velit ut officia minim ea aliqua pariatur. \nEst ex amet in consectetur pariatur non fugiat. Tempor commodo voluptate sint ad quis irure eiusmod. Anim aliqua ad aliqua ut deserunt duis pariatur et consequat \nconsequat sit culpa eu dolor. Nisi occaecat cupidatat aliqua in est cupidatat minim. Nisi dolor et consequat pariatur minim nisi cillum eiusmod qui.\n\nIn ullamco ut voluptate proident exercitation elit exercitation incididunt est ut quis. Officia sunt ad adipisicing velit laboris enim sit commodo. \nLorem sint voluptate aliqua amet labore cillum Lorem cupidatat occaecat quis aliquip minim officia sint. Dolore aliquip velit non consectetur fugiat \nnulla elit esse culpa ullamco. Veniam in dolore qui cupidatat pariatur id anim anim esse ad qui magna.\n\nQui labore et amet laborum consectetur tempor pariatur magna consequat. Elit laboris do exercitation ea nulla. Et esse occaecat mollit nostrud. Sint \nincididunt pariatur nostrud eiusmod ipsum consequat proident labore eu sit elit duis laborum in. Elit eiusmod sit ut ad Lorem do commodo do sunt eu eu laborum ad qui. \nDolor aliquip eu commodo aute deserunt esse aliquip ex consequat excepteur cillum in esse exercitation. Officia deserunt sunt sunt officia consectetur ad amet dolore dolore. ';

  name = "V";

  hello = `Hello ${name}`;

  range = [10, 9, 8, 7, 6];

  range2 = [5, 4, 3, 2, 1];

  range3 = range + range2;

  hey = {
    name: "Vadim",
    age: 26
  };

  [book, ele, page] = ['kay', '21', 15];

  user = {
    name: 'Vadin',
    age: 90
  };

  // this.age = config.age ? 10

  // show if ready is "1" then "2" else "3" 
  state = 2;

  console.log(`Mes: [${state}] ${((function() {
    switch (state) {
      case 0:
        return "0";
      case 1:
        return "1";
      case 2:
        return "2";
    }
  })())}`);

  console.log(prime = (function() {
    var j, results;
    results = [];
    for (i = j = 0; j <= 20; i = j += 2) {
      results.push(i);
    }
    return results;
  })());

  abla = console.log("dffsdfffsffssf");

  func = function(name) {
    return `Hello ${name}`;
  };

  console.log(func('vadym'));

  array = [1, 2, 3, 4, 5];

  for (j = 0, len = array.length; j < len; j++) {
    elem = array[j];
    console.log(elem);
  }

  str = +380935101390 + '';

  str2 = str.split('');

  str3 = str2.splice(5, 3, '***');

  str4 = str3.join('');

  console.log(range3);

  console.log(str2);

  console.log(str3);

  console.log(str4);

  console.log(book);

  $(function() {
    var Drawer, LoadContentOnScroll;
    Drawer = class Drawer {
      constructor() {
        this.el = function() {
          return $('.drawer');
        };
        this.bind();
        this.fixHeight();
      }

      open() {
        $('html').addClass('no-scroll drawer-open');
        return false;
      }

      close() {
        return $('html').removeClass('no-scroll drawer-open');
      }

      bind() {
        $('.body-overlay').on('click touchmove', () => {
          return this.close();
        });
        $('.open-drawer').on('click', () => {
          return this.open();
        });
        this.el().find('ul li a').on('click', () => {
          return this.close();
        });
        return $(document).on('page:load', () => {
          return this.close();
        });
      }

      fixHeight() {
        $(window).resize(() => {
          var drawerHeight;
          drawerHeight = 0;
          this.el().find('.drawer-container').children().each(function() {
            return drawerHeight += $(this).height();
          });
          if ($(window).height() < drawerHeight) {
            return this.el().addClass('fixheight');
          } else {
            return this.el().removeClass('fixheight');
          }
        });
        return $(window).resize();
      }

    };
    new Drawer();
    LoadContentOnScroll = class LoadContentOnScroll {};
    return {
      constructor: function(section) {
        this.sectionsContentIsLoading = false;
        this.sectionsContentIsLoaded = false;
        this.repeatRequest = 0;
        this.sectionsContent = {};
        this.section = section;
        this.bindScroll();
        return this.getSectionsContent();
      },
      isOnScreen: function(elem) {
        var $window, bottom, height, top, vpBottom, vpHeight, vpTop;
        if (!elem.length) {
          return;
        }
        $window = $(window);
        vpTop = $window.scrollTop();
        vpHeight = $window.height();
        vpBottom = vpTop + vpHeight;
        top = elem.offset().top;
        height = elem.height();
        bottom = top + height;
        return top >= vpTop && top < vpBottom || bottom > vpTop && bottom <= vpBottom || height > vpHeight && top <= vpTop && bottom >= vpBottom;
      },
      getSectionsContent: function() {
        return $.ajax({
          type: 'GET',
          url: '/home/lazy_sections.json',
          beforeSend: () => {
            return this.sectionsContentIsLoading = true;
          },
          success: (data) => {
            if (data === '') {
              return;
            }
            this.sectionsContent = data.sections;
            this.repeatRequest = 0;
            this.sectionsContentIsLoaded = true;
            return this.onPageLoadCheck();
          },
          error: () => {
            if (this.repeatRequest > 9) {
              this.repeatRequest = 0;
              return;
            }
            return this.repeatRequest++;
          },
          complete: () => {
            return this.sectionsContentIsLoading = false;
          }
        });
      },
      loadSection: function(section) {
        var sectionName;
        sectionName = section.attr('data-section');
        section.addClass('loading');
        if (this.sectionsContentIsLoading && !this.sectionsContentIsLoaded) {
          return;
        }
        return setTimeout((() => {
          section.html(this.sectionsContent[sectionName]).removeAttr('data-section').removeClass('loading');
          return this.renderScripts(section);
        }), 0);
      },
      loadIfOnScreen: (section) => {
        if (this.isOnScreen(section)) {
          return this.loadSection(section);
        }
      },
      onPageLoadCheck: () => {
        var checkPassed;
        checkPassed = checkPassed || false;
        if (!checkPassed) {
          this.loadIfOnScreen($(this.section).first());
          return checkPassed = true;
        }
      },
      renderScripts: function(section) {
        if ($("body[data-format='mobile']").length) {
          return;
        }
        if (section.attr('id') === 'section-featured') {
          window.modalPromotion();
        }
        return window.bindLogs();
      },
      bindScroll: function() {
        return $(window).on('scroll', () => {
          if (this.repeatRequest > 0 && !this.sectionsContentIsLoading && !this.sectionsContentIsLoaded) {
            return this.getSectionsContent();
          } else {
            return this.loadIfOnScreen($(this.section).first());
          }
        });
      }
    };
  });

  $(function() {
    if (!$('section[data-section]').length) {
      return;
    }
    return new LoadContentOnScroll('section[data-section]');
  });

}).call(this);
