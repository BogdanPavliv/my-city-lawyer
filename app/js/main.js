/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
}); 

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        mobileNavIcon.classList.remove('active');
	    mobileNav.classList.remove('active');
	    document.body.classList.remove('no-scroll');
    }
});

/* ================= Lazy load ========================= */

/* ================= libs start ========================= */
;(function () {
    var canUseWebP = function () {
      var elem = document.createElement("canvas");
  
      if (!!(elem.getContext && elem.getContext("2d"))) {
        // was able or not to get WebP representation
        return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
      }
  
      // very old browser like IE 8, canvas not supported
      return false;
    };
  
    var isWebpSupported = canUseWebP();
  
    if (isWebpSupported === false) {
      var lazyItems = document.querySelectorAll("[data-src-replace-webp]");
  
      for (var i = 0; i < lazyItems.length; i += 1) {
        var item = lazyItems[i];
  
        var dataSrcReplaceWebp = item.getAttribute("data-src-replace-webp");
        if (dataSrcReplaceWebp !== null) {
          item.setAttribute("data-src", dataSrcReplaceWebp);
        }
      }
    }
  
    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy",
    });
})();
/* ================= libs end =========================*/

/* ================= Recent Lawyer Listing slider ========================= */

const swiperLawyerListing = new Swiper('#swiper-lawyer-listing', {
	observer: true,
    observeParents: true,
    slidesPerView: 3,
    watchOverflow: true,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
        629: {
			slidesPerView: 2,
		},
		960: {
			slidesPerView: 3,
		}
	},
  
});

const swiperClients = new Swiper('#swiper-clients', {
	slidesPerView: 1,
    autoHeight: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	
  
});

/* ================= Dropdown ========================= */

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

(function () {
	
	if (!Element.prototype.closest) {
		
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	
	if (!Element.prototype.matches) {
		
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

/* ================= Tabs ========================= */

const tabsArray = document.querySelectorAll('.popular__tabs-triggers-item');

if (tabsArray.length > 0) {
	tabsArray.forEach((item) =>
	item.addEventListener('click', function(e) {

	e.preventDefault();
	const id = e.target.getAttribute('href').replace('#', '');

	document.querySelectorAll('.popular__tabs-triggers-item').forEach(
	(child) => child.classList.remove('popular__tabs-triggers-item-active')
	);
	document.querySelectorAll('.popular__tabs-content-item').forEach(
	(child) => child.classList.remove('popular__tabs-content-item-active')
	);

	item.classList.add('popular__tabs-triggers-item-active');
	document.getElementById(id).classList.add('popular__tabs-content-item-active');
	
    }));

	document.querySelector('.popular__tabs-triggers-item').click();
}

document.addEventListener('DOMContentLoaded', function () {
    const tabsArrayTriggers = document.querySelectorAll('.tabs-triggers__item');
  
    if (tabsArrayTriggers.length > 0) {
      tabsArrayTriggers.forEach((item) => {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
  
          const id = e.target.getAttribute('href').replace('#', '');
          const tabsContentActive = document.getElementById(id);
  
          tabsArrayTriggers.forEach((child) => child.classList.remove('tabs-triggers__item--active'));
          document.querySelectorAll('.tabs-content__item').forEach(
          (child) => child.classList.remove('tabs-content__item--active'));
          
          tabsContentActive.classList.add('tabs-content__item--active');
          item.classList.add('tabs-triggers__item--active');
          
          const tabsTriggersActive = document.querySelector('.tabs-triggers__item.tabs-triggers__item--active');
          document.querySelector('.search-lawyers__subtitle').textContent = tabsTriggersActive.textContent;
        });
      });
  
      document.querySelector('.tabs-triggers__item').click();
    }
  
});

var catalogBtnItems = document.querySelectorAll(".search-lawyers__sort--item");

if (catalogBtnItems.length > 0) {

    var removeChildren = function (item) {
        while (item.firstChild) {
          item.removeChild(item.firstChild);
        }
    };
    
    var updateChildren = function (item, children) {
        removeChildren(item);
        for (var i = 0; i < children.length; i += 1) {
          item.appendChild(children[i]);
        }
    };

    catalogBtnItems.forEach((btnItem) => {
        btnItem.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

          var searchLawyersNav = btnItem.closest('.search-lawyers__lawyers-nav');
          console.log(searchLawyersNav);
          var catalog = searchLawyersNav.querySelector(".tabs-content__item--active .search-lawyers__list");
          console.log(catalog);
          var catalogItems = searchLawyersNav.querySelectorAll(".tabs-content__item--active .search-lawyers__list--item");
          console.log(catalogItems);

          const filterValue = btnItem.getAttribute("data-filter");

          catalogItems.forEach((item) => {
            if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
              item.style.display = "";
            } else {
              item.style.display = "none";
            }
          });

          catalogBtnItems.forEach((item) => {
            item.parentElement.classList.remove("dropdown__list-item-active");
            item.classList.remove("search-lawyers__sort--item-active");
          });

          btnItem.parentElement.classList.add("dropdown__list-item-active");
          btnItem.classList.add("search-lawyers__sort--item-active");

          
        });
    });
}


/* ================= Filtration input ========================= */

var searchHereInputs = document.querySelectorAll('#search-here__input');

if (searchHereInputs.length > 0) {

    searchHereInputs.forEach((searchHereInput) => 

        searchHereInput.addEventListener('input', function searchHere() {
            var filter, ul, li, a, i;
        
            var main = searchHereInput.closest('.main');
            console.log(main);
        
            var tabsContentItem = main.querySelector('.tabs-content__item.tabs-content__item--active');
        
            console.log(tabsContentItem);
        
            filter = searchHereInput.value.toUpperCase();
            ul = main.querySelector('.tabs-content__item--active .search-lawyers__list');
            li = ul.querySelectorAll('.search-lawyers__list--item'); // Змінено тут
        
            console.log(ul);
        
            for(i = 0; i < li.length; i++) {
                a = li[i].querySelector(".search-lawyers__list--item-name-link"); // Змінено тут
                console.log(a);
                if (a && a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        })
    );
}


// var searchHereInput = document.getElementById('search-here__input');

// searchHereInput.addEventListener('input', function searchHere() {
//     var filter, ul, li, a, i;

//     var main = searchHereInput.closest('.main');
//     console.log(main);

//     var tabsContentItem = main.querySelector('.tabs-content__item.tabs-content__item--active');

//     console.log(tabsContentItem);

//     filter = searchHereInput.value.toUpperCase();
//     ul = main.querySelector('.tabs-content__item--active .search-lawyers__list');
//     li = ul.querySelectorAll('.search-lawyers__list--item'); // Змінено тут

//     console.log(ul);

//     for(i = 0; i < li.length; i++) {
//         a = li[i].querySelector(".search-lawyers__list--item-name-link"); // Змінено тут
//         console.log(a);
//         if (a && a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// });

/* ================= VIDEO ========================= */
const videoBtns = document.querySelectorAll('#video--btn');


if (videoBtns.length > 0) {

	videoBtns.forEach((videoBtn) => 
	
		videoBtn.addEventListener('click', function () {

            const videoWrapper = videoBtn.closest('.video-container-js');

            const videoBtnIcon = videoWrapper.querySelector('#video--btn-icon');
            const videoOverlay = videoWrapper.querySelector('#video--overlay');
            const videoFile = videoWrapper.querySelector('#video--object');

            

            console.log(videoWrapper);

			function toggleOverlay(event){
				if (event.type === 'mouseleave') {
					videoOverlay.classList.add('hidden');
				} else {
					videoOverlay.classList.remove('hidden');
				}
			}
		
			if (videoFile.paused) {
				videoFile.play();
				videoBtnIcon.src = './images/how-it-works/video/pause-white.svg';
		
				videoOverlay.onmouseleave = toggleOverlay;
				videoOverlay.onmouseenter = toggleOverlay;
		
			} else {
				videoFile.pause();
				videoBtnIcon.src = './images/how-it-works/video/play-white.svg';
				videoOverlay.onmouseleave = null;
				videoOverlay.onmouseenter = null;
		
			}
		
		})

	);
	
	
}


/* catalog start */

;(function () {
    // var catalogSection = document.querySelector(".search-lawyers");
  
    // if (catalogSection === null) {
    //   return;
    // }
  
    // var removeChildren = function (item) {
    //   while (item.firstChild) {
    //     item.removeChild(item.firstChild);
    //   }
    // };
  
    // var updateChildren = function (item, children) {
    //   removeChildren(item);
    //   for (var i = 0; i < children.length; i += 1) {
    //     item.appendChild(children[i]);
    //   }
    // };
  
    // // var catalog = catalogSection.querySelector(".search-lawyers__list");
    // var catalogNav = catalogSection.querySelector(".dropdown__list-js");
    // var catalogItems = catalogSection.querySelectorAll(".search-lawyers__list--item");

    // var catalogBtnItems = catalogSection.querySelectorAll(".search-lawyers__sort--item");


    

    // catalogBtnItems.forEach((item) => item.addEventListener('click', function(e) {
    //     var target = e.target;
    //     // console.log(target);

    //     if (item === null || item.parentElement.classList.contains("dropdown__list-item-active")) {
    //         return;
    //     }

    //     e.preventDefault();
    //     var filterValue = item.getAttribute("data-filter");

    //     var previousBtnsActive = catalogNav.querySelectorAll(".dropdown__list-item.dropdown__list-item-active");
    //     previousBtnsActive.forEach((previousBtnActive) => {
    //         previousBtnActive.classList.remove("dropdown__list-item-active");
    //     });

    //     var searchLawyersNav = item.closest('.search-lawyers__lawyers-nav');

    //     var catalog = searchLawyersNav.querySelector(".search-lawyers__list");
    //     console.log(searchLawyersNav);


    //     item.parentElement.classList.add("dropdown__list-item-active");
    //     item.classList.add("search-lawyers__sort--item-active");
  
    //     if (filterValue === "all") {
    //        updateChildren(catalog, searchLawyersNav.querySelectorAll(".search-lawyers__list--item"));
    //        return;
    //     }
  
    //     var filteredItems = [];
    //     for (var i = 0; i < searchLawyersNav.querySelectorAll(".search-lawyers__list--item").length; i += 1) {

    //     var current = searchLawyersNav.querySelectorAll(".search-lawyers__list--item")[i];

    //     if (current.getAttribute("data-category") === filterValue) {
    //         console.log(current);

    //         console.log('filterValue ' + filterValue);
            
    //         filteredItems.push(current);
    //     }
    //   }
  
    //   updateChildren(catalog, filteredItems);
        
    // }));

})();

/* ================= catalog end ========================= */

/* ================= Form validation ========================= */

"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("#form");

    if (forms.length > 0) {
        forms.forEach((form) => form.addEventListener("submit",  async function formSend(e) {
            e.preventDefault();
    
            let error = formValidate(form);
    
            let formData = new FormData(form);
    
            if (error === 0) {
                form.classList.add('_sending');
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData
                });
                if(response.ok){
                   let result = await response.json();
                   alert(result.message);
                   form.reset();
                   form.classList.remove('_sending');
                } else {
                   alert("Помилка");
                   form.classList.remove('_sending');
                }
            } else {
                alert(`Заповніть обов'язкові поля!`);
            }
        }));

        function formValidate(form) {
            let error = 0;
            let formReq = document.querySelectorAll('._req');
    
            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);
    
                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                }  else {
                   if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }
    
        function formAddError(input) {
            input.parentElement.classList.add('form-error');
            input.classList.add("form-error");
        }
    
        function formRemoveError(input) {
            input.parentElement.classList.remove('form-error');
            input.classList.remove("form-error");
        }

        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }
    }
});


/* ================= Spoller ========================= */

"use strict"

const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {

    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });
    
    if (spollersRegular.length > 0) {
        initSpollers(spollersRegular);
    }

    const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
        return item.dataset.spollers.split(",")[0];
    });

    if (spollersMedia.length > 0) {
        const breakpointsArray = [];
        spollersMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width:" + item.value + "px)," + item.value + ',' + item.type;
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
           return self.indexOf(item) === index;
        });

        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            const spollersArray = breakpointsArray.filter(function (item) {
               if (item.value === mediaBreakpoint && item.type === mediaType) {
                   return true;
               }
            });
            
            matchMedia.addListener(function () {
               initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
        });
    }
    
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
           spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
           if (matchMedia.matches || !matchMedia) {
              spollersBlock.classList.add('_init');
              initSpollerBody(spollersBlock);
              spollersBlock.addEventListener("click", setSpollerAction);
            } else {
              spollersBlock.classList.remove('_init');
              initSpollerBody(spollersBlock, false);
              spollersBlock.removeEventListener("click", setSpollerAction);
            }
        });
    }
    
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
        if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
               if (hideSpollerBody) {
                 spollerTitle.removeAttribute('tabindex');
                 if (!spollerTitle.classList.contains('_active')) {
                    spollerTitle.nextElementSibling.hidden = true;
                 }
               } else {
                    spollerTitle.setAttribute('tabindex', '-1');
                    spollerTitle.nextElementSibling.hidden = false;
               }
            });
        }
    }
    function setSpollerAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
            if (!spollersBlock.querySelectorAll('._slide').length) {
                if (oneSpoller && !spollerTitle.classList.contains('_active')) {
                    hideSpollersBody(spollersBlock);
                }
                spollerTitle.classList.toggle('_active');
                _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }
    function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
        }
    }
}

/* =============== Slide Toggle start ========================= */ 

let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
          target.hidden = true;
          target.style.removeProperty('height');
          target.style.removeProperty('padding-top');
          target.style.removeProperty('padding-bottom');
          target.style.removeProperty('margin-top');
          target.style.removeProperty('margin-bottom');
          target.style.removeProperty('overflow');
          target.style.removeProperty('transition-duration');
          target.style.removeProperty('transition-property');
          target.classList.remove('_slide');
        }, duration);
    }
}

let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
          target.style.removeProperty('height');
          target.style.removeProperty('overflow');
          target.style.removeProperty('transition-duration');
          target.style.removeProperty('transition-property');
          target.classList.remove('_slide');
        }, duration);
    }
}

let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}

/* =============== Slide Toggle end ========================= */ 