(function (_, Kotlin, $module$kotlin_react_dom, $module$kotlin_react_router_dom, $module$kotlin_react, $module$kotlinx_html_js, $module$kotlin_react_redux, $module$kotlin_extensions, $module$kotlin_redux, $module$redux) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var navLink = $module$kotlin_react_router_dom.react.router.dom.navLink_bcialx$;
  var route = $module$kotlin_react_router_dom.react.router.dom.route_9tkfd6$;
  var switch_0 = $module$kotlin_react_router_dom.react.router.dom.switch_jg12zk$;
  var functionalComponent = $module$kotlin_react.react.functionalComponent_1klik0$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var child = $module$kotlin_react.react.child_9r8yuv$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var useState = $module$kotlin_react.react.useState_mh5how$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var throwCCE = Kotlin.throwCCE;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var equals = Kotlin.equals;
  var set_hidden = $module$kotlinx_html_js.kotlinx.html.set_hidden_jqpcbu$;
  var OPTION_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
  var SELECT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
  var TD_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var TR_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var H3_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var TABLE_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var H2_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var LI_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var H4_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
  var UL_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var rConnect = $module$kotlin_react_redux.react.redux.rConnect_hfg8n2$;
  var invoke = $module$kotlin_react.react.invoke_adv8my$;
  var rConnect_0 = $module$kotlin_react_redux.react.redux.rConnect_aavpjk$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var get_rClass = $module$kotlin_react.react.get_rClass_zdekks$;
  var getCallableRef = Kotlin.getCallableRef;
  var rEnhancer = $module$kotlin_redux.redux.rEnhancer_287e2$;
  var compose = $module$redux.compose;
  var createStore = $module$redux.createStore;
  var hashRouter = $module$kotlin_react_router_dom.react.router.dom.hashRouter_jg12zk$;
  var provider = $module$kotlin_react_redux.react.redux.provider_6c40e8$;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var RAction = $module$kotlin_redux.redux.RAction;
  var plus = Kotlin.kotlin.collections.plus_e8164j$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AppProps() {
  }
  AppProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AppProps',
    interfaces: []
  };
  function RouteNumberResult() {
  }
  RouteNumberResult.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RouteNumberResult',
    interfaces: []
  };
  function fApp$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043F\u0438\u0441\u043A\u0443 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432');
    return Unit;
  }
  function fApp$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda(closure$props, this$) {
    return function () {
      return questions(this$, closure$props.questions, closure$props.category);
    };
  }
  function fApp$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda_0(this$) {
    return function () {
      return this$.invoke_eb8iu4$(redactContainer, fApp$lambda$lambda$lambda$lambda$lambda);
    };
  }
  function fApp$lambda$lambda$lambda_1(closure$props) {
    return function ($receiver) {
      route($receiver, '/questions', true, void 0, fApp$lambda$lambda$lambda$lambda(closure$props, $receiver));
      route($receiver, '/edit', true, void 0, fApp$lambda$lambda$lambda$lambda_0($receiver));
      return Unit;
    };
  }
  function fApp$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda('home'));
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    navLink($receiver_0, '/questions', void 0, 'nav', void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda);
    navLink($receiver_0, '/edit', void 0, 'nav', void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda_0);
    switch_0($receiver_0, fApp$lambda$lambda$lambda_1(props));
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  function fApp() {
    return functionalComponent(fApp$lambda);
  }
  function renderObject$lambda(closure$selector, closure$rElement, this$renderObject) {
    return function (route_props) {
      var tmp$;
      var num = (tmp$ = toIntOrNull(route_props.match.params.number)) != null ? tmp$ : -1;
      var obj = closure$selector(num);
      if (obj != null) {
        return closure$rElement(num, obj);
      } else {
        var $receiver = this$renderObject;
        var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
        $receiver_0.unaryPlus_pdl1vz$('Object not found');
        return $receiver.child_2usv9w$($receiver_0.create());
      }
    };
  }
  function renderObject($receiver, selector, rElement) {
    return renderObject$lambda(selector, rElement, $receiver);
  }
  function app$lambda($receiver) {
    return Unit;
  }
  function app($receiver) {
    return child($receiver, fApp(), void 0, app$lambda);
  }
  function option$lambda(closure$classes) {
    return function (it) {
      return new OPTION_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function select$lambda(closure$classes) {
    return function (it) {
      return new SELECT_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function td$lambda(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function tr$lambda(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function table$lambda(closure$classes) {
    return function (it) {
      return new TABLE_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function QuestionsProps() {
  }
  QuestionsProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'QuestionsProps',
    interfaces: []
  };
  function fQuestions$lambda$lambda$lambda$lambda(closure$setCategory) {
    return function (it) {
      var tmp$;
      var categoryHtml = Kotlin.isType(tmp$ = document.getElementById('category'), HTMLSelectElement) ? tmp$ : throwCCE();
      closure$setCategory(categoryHtml.value);
      return Unit;
    };
  }
  function fQuestions$lambda($receiver, props) {
    var tmp$ = useState('\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F');
    var currentCategory = tmp$.component1()
    , setCategory = tmp$.component2();
    var $receiver_0 = new RDOMBuilder_init(div$lambda_0(null));
    var $receiver_0_0 = new RDOMBuilder_init(h2$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(select$lambda('select-css'));
    var tmp$_0, tmp$_1;
    tmp$_0 = props.category;
    for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
      var element = tmp$_0[tmp$_1];
      set_id($receiver_0_1.attrs, 'category');
      var $receiver_0_2 = new RDOMBuilder_init(option$lambda(null));
      $receiver_0_2.unaryPlus_pdl1vz$(element.category);
      $receiver_0_1.child_2usv9w$($receiver_0_2.create());
      set_onChangeFunction($receiver_0_1.attrs, fQuestions$lambda$lambda$lambda$lambda(setCategory));
    }
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    var $receiver_1 = props.questions.values;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_2;
    tmp$_2 = $receiver_1.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      var tmp$_3 = destination.add_11rb$;
      if (equals(item.category, currentCategory)) {
        var $receiver_0_3 = new RDOMBuilder_init(h3$lambda(null));
        $receiver_0_3.unaryPlus_pdl1vz$(item.name);
        $receiver_0.child_2usv9w$($receiver_0_3.create());
        var $receiver_0_4 = new RDOMBuilder_init(table$lambda(null));
        var $receiver_2 = item.text;
        var destination_0 = ArrayList_init($receiver_2.length);
        var tmp$_4;
        for (tmp$_4 = 0; tmp$_4 !== $receiver_2.length; ++tmp$_4) {
          var item_0 = $receiver_2[tmp$_4];
          var tmp$_5 = destination_0.add_11rb$;
          var $receiver_0_5 = new RDOMBuilder_init(tr$lambda(null));
          var $receiver_0_6 = new RDOMBuilder_init(td$lambda(null));
          $receiver_0_6.unaryPlus_pdl1vz$(item_0);
          $receiver_0_5.child_2usv9w$($receiver_0_6.create());
          var $receiver_0_7 = new RDOMBuilder_init(td$lambda(null));
          var $receiver_0_8 = new RDOMBuilder_init(select$lambda('select-css'));
          var tmp$_6, tmp$_7;
          var $receiver_0_9 = new RDOMBuilder_init(option$lambda(null));
          var $receiver_3 = $receiver_0_9.attrs;
          $receiver_3.selected = true;
          $receiver_3.disabled = true;
          set_hidden($receiver_3, true);
          $receiver_0_8.child_2usv9w$($receiver_0_9.create());
          tmp$_6 = item.asnwers;
          for (tmp$_7 = 0; tmp$_7 !== tmp$_6.length; ++tmp$_7) {
            var element_0 = tmp$_6[tmp$_7];
            var $receiver_0_10 = new RDOMBuilder_init(option$lambda(null));
            $receiver_0_10.unaryPlus_pdl1vz$(element_0);
            $receiver_0_8.child_2usv9w$($receiver_0_10.create());
          }
          $receiver_0_7.child_2usv9w$($receiver_0_8.create());
          $receiver_0_5.child_2usv9w$($receiver_0_7.create());
          tmp$_5.call(destination_0, $receiver_0_4.child_2usv9w$($receiver_0_5.create()));
        }
        $receiver_0.child_2usv9w$($receiver_0_4.create());
      }tmp$_3.call(destination, Unit);
    }
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fQuestions;
  function questions$lambda(closure$questions, closure$category) {
    return function ($receiver) {
      $receiver.attrs.questions = closure$questions;
      $receiver.attrs.category = closure$category;
      return Unit;
    };
  }
  function questions($receiver, questions, category) {
    return child($receiver, withDisplayName_0('Questions', fQuestions), void 0, questions$lambda(questions, category));
  }
  function option$lambda_0(closure$classes) {
    return function (it) {
      return new OPTION_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function li$lambda(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h4$lambda(closure$classes) {
    return function (it) {
      return new H4_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ul$lambda(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_1(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function select$lambda_0(closure$classes) {
    return function (it) {
      return new SELECT_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h2$lambda_0(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function RedactProps() {
  }
  RedactProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RedactProps',
    interfaces: []
  };
  function fRedact$lambda$lambda$lambda(closure$setCategory) {
    return function (it) {
      var tmp$;
      var categoryHtml = Kotlin.isType(tmp$ = document.getElementById('category'), HTMLSelectElement) ? tmp$ : throwCCE();
      closure$setCategory(categoryHtml.value);
      return Unit;
    };
  }
  function fRedact$lambda$lambda$lambda_0(it) {
    var tmp$;
    var modal = Kotlin.isType(tmp$ = document.getElementById('myModal'), HTMLDivElement) ? tmp$ : throwCCE();
    modal.style.display = 'block';
    return Unit;
  }
  function fRedact$lambda$lambda$lambda$lambda$lambda(closure$props, closure$it) {
    return function (f) {
      closure$props.delete(closure$it.key);
      return Unit;
    };
  }
  function fRedact$lambda$lambda$lambda$lambda$lambda_0(closure$props) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
      var modal = Kotlin.isType(tmp$ = document.getElementById('myModal'), HTMLElement) ? tmp$ : throwCCE();
      var name = Kotlin.isType(tmp$_0 = document.getElementById('name'), HTMLInputElement) ? tmp$_0 : throwCCE();
      var cat = Kotlin.isType(tmp$_1 = document.getElementById('qcat'), HTMLSelectElement) ? tmp$_1 : throwCCE();
      var t1 = Kotlin.isType(tmp$_2 = document.getElementById('t1'), HTMLInputElement) ? tmp$_2 : throwCCE();
      var t2 = Kotlin.isType(tmp$_3 = document.getElementById('t2'), HTMLInputElement) ? tmp$_3 : throwCCE();
      var t3 = Kotlin.isType(tmp$_4 = document.getElementById('t3'), HTMLInputElement) ? tmp$_4 : throwCCE();
      var a1 = Kotlin.isType(tmp$_5 = document.getElementById('a1'), HTMLInputElement) ? tmp$_5 : throwCCE();
      var a2 = Kotlin.isType(tmp$_6 = document.getElementById('a2'), HTMLInputElement) ? tmp$_6 : throwCCE();
      var a3 = Kotlin.isType(tmp$_7 = document.getElementById('a3'), HTMLInputElement) ? tmp$_7 : throwCCE();
      var newQuestion = new Question(name.value, cat.value, [t1.value, t2.value, t3.value], [a1.value, a2.value, a3.value]);
      closure$props.add(newQuestion);
      modal.style.display = 'none';
      return Unit;
    };
  }
  function fRedact$lambda$lambda$lambda$lambda$lambda_1(it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var modal = Kotlin.isType(tmp$ = document.getElementById('myModal'), HTMLElement) ? tmp$ : throwCCE();
    var name = Kotlin.isType(tmp$_0 = document.getElementById('name'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var cat = Kotlin.isType(tmp$_1 = document.getElementById('qcat'), HTMLSelectElement) ? tmp$_1 : throwCCE();
    var t1 = Kotlin.isType(tmp$_2 = document.getElementById('t1'), HTMLInputElement) ? tmp$_2 : throwCCE();
    var t2 = Kotlin.isType(tmp$_3 = document.getElementById('t2'), HTMLInputElement) ? tmp$_3 : throwCCE();
    var t3 = Kotlin.isType(tmp$_4 = document.getElementById('t3'), HTMLInputElement) ? tmp$_4 : throwCCE();
    var a1 = Kotlin.isType(tmp$_5 = document.getElementById('a1'), HTMLInputElement) ? tmp$_5 : throwCCE();
    var a2 = Kotlin.isType(tmp$_6 = document.getElementById('a2'), HTMLInputElement) ? tmp$_6 : throwCCE();
    var a3 = Kotlin.isType(tmp$_7 = document.getElementById('a3'), HTMLInputElement) ? tmp$_7 : throwCCE();
    modal.style.display = 'none';
    name.value = '';
    cat.value = '';
    t1.value = '';
    t2.value = '';
    t3.value = '';
    a1.value = '';
    a2.value = '';
    a3.value = '';
    return Unit;
  }
  function fRedact$lambda($receiver, props) {
    var tmp$ = useState('\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F');
    var currentCategory = tmp$.component1()
    , setCategory = tmp$.component2();
    var $receiver_0 = new RDOMBuilder_init(h2$lambda_0(null));
    $receiver_0.unaryPlus_pdl1vz$('\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432');
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(select$lambda_0('select-css'));
    var tmp$_0, tmp$_1;
    tmp$_0 = props.category;
    for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
      var element = tmp$_0[tmp$_1];
      set_id($receiver_0_0.attrs, 'category');
      var $receiver_0_1 = new RDOMBuilder_init(option$lambda_0(null));
      $receiver_0_1.unaryPlus_pdl1vz$(element.category);
      $receiver_0_0.child_2usv9w$($receiver_0_1.create());
      set_onChangeFunction($receiver_0_0.attrs, fRedact$lambda$lambda$lambda(setCategory));
    }
    $receiver.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_2 = new RDOMBuilder_init(button$lambda(null, null, null, 'big'));
    $receiver_0_2.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441');
    set_id($receiver_0_2.attrs, 'myBtn');
    set_onClickFunction($receiver_0_2.attrs, fRedact$lambda$lambda$lambda_0);
    $receiver.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_3 = new RDOMBuilder_init(div$lambda_1('delete'));
    var $receiver_1 = props.questions;
    var destination = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = $receiver_1.entries.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      if (equals(element_0.value.category, currentCategory)) {
        destination.put_xwzc9p$(element_0.key, element_0.value);
      }}
    var destination_0 = ArrayList_init(destination.size);
    var tmp$_3;
    tmp$_3 = destination.entries.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      var tmp$_4 = destination_0.add_11rb$;
      var $receiver_0_4 = new RDOMBuilder_init(button$lambda(null, null, null, null));
      $receiver_0_4.unaryPlus_pdl1vz$('\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441 ' + (item.key + 1 | 0));
      set_onClickFunction($receiver_0_4.attrs, fRedact$lambda$lambda$lambda$lambda$lambda(props, item));
      tmp$_4.call(destination_0, $receiver_0_3.child_2usv9w$($receiver_0_4.create()));
    }
    $receiver.child_2usv9w$($receiver_0_3.create());
    var $receiver_2 = props.questions.values;
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_5, tmp$_0_0;
    var index = 0;
    tmp$_5 = $receiver_2.iterator();
    while (tmp$_5.hasNext()) {
      var item_0 = tmp$_5.next();
      var tmp$_6 = destination_1.add_11rb$;
      checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
      if (equals(item_0.category, currentCategory)) {
        var $receiver_0_5 = new RDOMBuilder_init(div$lambda_1('edit'));
        var $receiver_0_6 = new RDOMBuilder_init(h4$lambda(null));
        $receiver_0_6.unaryPlus_pdl1vz$(item_0.name);
        $receiver_0_5.child_2usv9w$($receiver_0_6.create());
        var $receiver_0_7 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
        $receiver_0_7.attrs.placeholder = '\u041D\u043E\u0432\u043E\u0435 \u0438\u043C\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u0430';
        $receiver_0_5.child_2usv9w$($receiver_0_7.create());
        var $receiver_0_8 = new RDOMBuilder_init(button$lambda(null, null, null, null));
        $receiver_0_8.unaryPlus_pdl1vz$('\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C');
        $receiver_0_5.child_2usv9w$($receiver_0_8.create());
        var $receiver_0_9 = new RDOMBuilder_init(ul$lambda(null));
        var $receiver_3 = item_0.text;
        var destination_2 = ArrayList_init($receiver_3.length);
        var tmp$_7;
        for (tmp$_7 = 0; tmp$_7 !== $receiver_3.length; ++tmp$_7) {
          var item_1 = $receiver_3[tmp$_7];
          var tmp$_8 = destination_2.add_11rb$;
          var $receiver_0_10 = new RDOMBuilder_init(li$lambda(null));
          $receiver_0_10.unaryPlus_pdl1vz$('\u041F\u043E\u0434\u0432\u043E\u043F\u0440\u043E\u0441:' + item_1);
          var $receiver_0_11 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
          $receiver_0_11.attrs.placeholder = '\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u0434\u0432\u043E\u043F\u0440\u043E\u0441';
          $receiver_0_10.child_2usv9w$($receiver_0_11.create());
          var $receiver_0_12 = new RDOMBuilder_init(button$lambda(null, null, null, null));
          $receiver_0_12.unaryPlus_pdl1vz$('\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C');
          $receiver_0_10.child_2usv9w$($receiver_0_12.create());
          tmp$_8.call(destination_2, $receiver_0_9.child_2usv9w$($receiver_0_10.create()));
        }
        var $receiver_4 = item_0.asnwers;
        var destination_3 = ArrayList_init($receiver_4.length);
        var tmp$_9;
        for (tmp$_9 = 0; tmp$_9 !== $receiver_4.length; ++tmp$_9) {
          var item_2 = $receiver_4[tmp$_9];
          var tmp$_10 = destination_3.add_11rb$;
          var $receiver_0_13 = new RDOMBuilder_init(li$lambda(null));
          $receiver_0_13.unaryPlus_pdl1vz$('\u041E\u0442\u0432\u0435\u0442: ' + item_2);
          var $receiver_0_14 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
          $receiver_0_14.attrs.placeholder = '\u041D\u043E\u0432\u044B\u0439 \u043E\u0442\u0432\u0435\u0442';
          $receiver_0_13.child_2usv9w$($receiver_0_14.create());
          var $receiver_0_15 = new RDOMBuilder_init(button$lambda(null, null, null, null));
          $receiver_0_15.unaryPlus_pdl1vz$('\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C');
          $receiver_0_13.child_2usv9w$($receiver_0_15.create());
          tmp$_10.call(destination_3, $receiver_0_9.child_2usv9w$($receiver_0_13.create()));
        }
        $receiver_0_5.child_2usv9w$($receiver_0_9.create());
        $receiver.child_2usv9w$($receiver_0_5.create());
      }tmp$_6.call(destination_1, Unit);
    }
    var $receiver_0_16 = new RDOMBuilder_init(div$lambda_1('modal'));
    set_id($receiver_0_16.attrs, 'myModal');
    var $receiver_0_17 = new RDOMBuilder_init(div$lambda_1('modal-content'));
    var $receiver_0_18 = new RDOMBuilder_init(h4$lambda(null));
    $receiver_0_18.unaryPlus_pdl1vz$('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u0430');
    $receiver_0_17.child_2usv9w$($receiver_0_18.create());
    var $receiver_0_19 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
    set_id($receiver_0_19.attrs, 'name');
    $receiver_0_17.child_2usv9w$($receiver_0_19.create());
    var $receiver_0_20 = new RDOMBuilder_init(h4$lambda(null));
    $receiver_0_20.unaryPlus_pdl1vz$('\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0432\u043E\u043F\u0440\u043E\u0441\u0430');
    $receiver_0_17.child_2usv9w$($receiver_0_20.create());
    var $receiver_0_21 = new RDOMBuilder_init(select$lambda_0('select-css'));
    var tmp$_11, tmp$_12;
    tmp$_11 = props.category;
    for (tmp$_12 = 0; tmp$_12 !== tmp$_11.length; ++tmp$_12) {
      var element_1 = tmp$_11[tmp$_12];
      set_id($receiver_0_21.attrs, 'qcat');
      var $receiver_0_22 = new RDOMBuilder_init(option$lambda_0(null));
      $receiver_0_22.unaryPlus_pdl1vz$(element_1.category);
      $receiver_0_21.child_2usv9w$($receiver_0_22.create());
    }
    $receiver_0_17.child_2usv9w$($receiver_0_21.create());
    var $receiver_0_23 = new RDOMBuilder_init(h4$lambda(null));
    $receiver_0_23.unaryPlus_pdl1vz$('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430');
    $receiver_0_17.child_2usv9w$($receiver_0_23.create());
    var $receiver_0_24 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
    set_id($receiver_0_24.attrs, 't1');
    $receiver_0_17.child_2usv9w$($receiver_0_24.create());
    var $receiver_0_25 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
    set_id($receiver_0_25.attrs, 't2');
    $receiver_0_17.child_2usv9w$($receiver_0_25.create());
    var $receiver_0_26 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
    set_id($receiver_0_26.attrs, 't3');
    $receiver_0_17.child_2usv9w$($receiver_0_26.create());
    var $receiver_0_27 = new RDOMBuilder_init(h4$lambda(null));
    $receiver_0_27.unaryPlus_pdl1vz$('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430  \u0432\u043E\u043F\u0440\u043E\u0441\u044B');
    $receiver_0_17.child_2usv9w$($receiver_0_27.create());
    var $receiver_0_28 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
    set_id($receiver_0_28.attrs, 'a1');
    $receiver_0_17.child_2usv9w$($receiver_0_28.create());
    var $receiver_0_29 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
    set_id($receiver_0_29.attrs, 'a2');
    $receiver_0_17.child_2usv9w$($receiver_0_29.create());
    var $receiver_0_30 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
    set_id($receiver_0_30.attrs, 'a3');
    $receiver_0_17.child_2usv9w$($receiver_0_30.create());
    var $receiver_0_31 = new RDOMBuilder_init(button$lambda(null, null, null, null));
    $receiver_0_31.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C');
    set_onClickFunction($receiver_0_31.attrs, fRedact$lambda$lambda$lambda$lambda$lambda_0(props));
    $receiver_0_17.child_2usv9w$($receiver_0_31.create());
    var $receiver_0_32 = new RDOMBuilder_init(button$lambda(null, null, null, null));
    $receiver_0_32.unaryPlus_pdl1vz$('\u0417\u0430\u043A\u0440\u044B\u0442\u044C');
    set_onClickFunction($receiver_0_32.attrs, fRedact$lambda$lambda$lambda$lambda$lambda_1);
    $receiver_0_17.child_2usv9w$($receiver_0_32.create());
    $receiver_0_16.child_2usv9w$($receiver_0_17.create());
    $receiver.child_2usv9w$($receiver_0_16.create());
    return Unit;
  }
  var fRedact;
  function redact$lambda(closure$questions, closure$category, closure$add, closure$delete) {
    return function ($receiver) {
      $receiver.attrs.questions = closure$questions;
      $receiver.attrs.category = closure$category;
      $receiver.attrs.add = closure$add;
      $receiver.attrs.delete = closure$delete;
      return Unit;
    };
  }
  function redact($receiver, questions, category, add, delete_0) {
    return child($receiver, withDisplayName_0('Redact', fRedact), void 0, redact$lambda(questions, category, add, delete_0));
  }
  function appContainer$lambda($receiver, state, f) {
    $receiver.questions = state.questions;
    $receiver.category = state.category;
    return Unit;
  }
  function appContainer$lambda_0($receiver) {
    $receiver.pure = false;
    return Unit;
  }
  var appContainer;
  function RedactDispatchProps() {
  }
  RedactDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RedactDispatchProps',
    interfaces: []
  };
  function RedactStateProps() {
  }
  RedactStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RedactStateProps',
    interfaces: []
  };
  function redactHoc$lambda($receiver, state, f) {
    $receiver.questions = state.questions;
    $receiver.category = state.category;
    return Unit;
  }
  function redactHoc$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddQuestion(it));
      return Unit;
    };
  }
  function redactHoc$lambda$lambda_0(closure$dispatch) {
    return function (it) {
      closure$dispatch(new DeleteQuestion(it));
      return Unit;
    };
  }
  function redactHoc$lambda_0($receiver, dispatch, f) {
    $receiver.add = redactHoc$lambda$lambda(dispatch);
    $receiver.delete = redactHoc$lambda$lambda_0(dispatch);
    return Unit;
  }
  var redactHoc;
  var redactRClass;
  var redactContainer;
  function State(questions, category) {
    this.questions = questions;
    this.category = category;
  }
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function newId($receiver) {
    var tmp$, tmp$_0;
    var $receiver_0 = $receiver.entries;
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }var maxValue = maxElem.key;
      do {
        var e = iterator.next();
        var v = e.key;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }}
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    return ((tmp$_0 = (tmp$ = maxBy$result) != null ? tmp$.key : null) != null ? tmp$_0 : 0) + 1 | 0;
  }
  function initialState() {
    return new State(questionList, categoryList);
  }
  function Category(id, category, questions) {
    this.id = id;
    this.category = category;
    this.questions = questions;
  }
  Category.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Category',
    interfaces: []
  };
  Category.prototype.component1 = function () {
    return this.id;
  };
  Category.prototype.component2 = function () {
    return this.category;
  };
  Category.prototype.component3 = function () {
    return this.questions;
  };
  Category.prototype.copy_qdc4bg$ = function (id, category, questions) {
    return new Category(id === void 0 ? this.id : id, category === void 0 ? this.category : category, questions === void 0 ? this.questions : questions);
  };
  Category.prototype.toString = function () {
    return 'Category(id=' + Kotlin.toString(this.id) + (', category=' + Kotlin.toString(this.category)) + (', questions=' + Kotlin.toString(this.questions)) + ')';
  };
  Category.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.category) | 0;
    result = result * 31 + Kotlin.hashCode(this.questions) | 0;
    return result;
  };
  Category.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.category, other.category) && Kotlin.equals(this.questions, other.questions)))));
  };
  var categoryList;
  function Question(name, category, text, asnwers) {
    this.name = name;
    this.category = category;
    this.text = text;
    this.asnwers = asnwers;
  }
  Question.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Question',
    interfaces: []
  };
  Question.prototype.component1 = function () {
    return this.name;
  };
  Question.prototype.component2 = function () {
    return this.category;
  };
  Question.prototype.component3 = function () {
    return this.text;
  };
  Question.prototype.component4 = function () {
    return this.asnwers;
  };
  Question.prototype.copy_jngk6g$ = function (name, category, text, asnwers) {
    return new Question(name === void 0 ? this.name : name, category === void 0 ? this.category : category, text === void 0 ? this.text : text, asnwers === void 0 ? this.asnwers : asnwers);
  };
  Question.prototype.toString = function () {
    return 'Question(name=' + Kotlin.toString(this.name) + (', category=' + Kotlin.toString(this.category)) + (', text=' + Kotlin.toString(this.text)) + (', asnwers=' + Kotlin.toString(this.asnwers)) + ')';
  };
  Question.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.category) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.asnwers) | 0;
    return result;
  };
  Question.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.category, other.category) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.asnwers, other.asnwers)))));
  };
  var questionList;
  function withDisplayName(name, kClass) {
    get_rClass(kClass).displayName = name;
    return kClass;
  }
  function withDisplayName_0(name, fComp) {
    var obj = {};
    obj.displayName = name;
    return Object.assign(fComp, obj);
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.invoke_eb8iu4$(appContainer, main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    hashRouter($receiver, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(closure$store) {
    return function ($receiver) {
      provider($receiver, closure$store, main$lambda$lambda);
      return Unit;
    };
  }
  function main() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = getCallableRef('rootReducer', function (state, action) {
      return rootReducer(state, action);
    });
    tmp$_0 = initialState();
    tmp$_1 = rEnhancer();
    if (window.__REDUX_DEVTOOLS_EXTENSION__)
      tmp$_2 = window.__REDUX_DEVTOOLS_EXTENSION__();
    else
      tmp$_2 = function (f) {
        return f;
      };
    var store = createStore(tmp$, tmp$_0, compose(tmp$_1, tmp$_2));
    render(document.getElementById('root'), void 0, main$lambda(store));
  }
  function AddQuestion(question) {
    this.question = question;
  }
  AddQuestion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddQuestion',
    interfaces: [RAction]
  };
  function DeleteQuestion(index) {
    this.index = index;
  }
  DeleteQuestion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeleteQuestion',
    interfaces: [RAction]
  };
  function rootReducer(state, action) {
    if (Kotlin.isType(action, AddQuestion)) {
      var id = newId(state.questions);
      var newQuestions = plus(state.questions, to(id, action.question));
      var $receiver = state.category;
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        var tmp$_0 = destination.add_11rb$;
        if (equals(action.question.category, item.category)) {
          item.questions = item.questions.concat([id]);
          console.log(id);
          console.log(item.questions);
        }tmp$_0.call(destination, item);
      }
      var newCategories = copyToArray(destination);
      return new State(newQuestions, newCategories);
    } else if (Kotlin.isType(action, DeleteQuestion)) {
      var $receiver_0 = toMutableMap(state.questions);
      $receiver_0.remove_11rb$(action.index);
      var newQuestions_0 = $receiver_0;
      var $receiver_1 = state.category;
      var destination_0 = ArrayList_init($receiver_1.length);
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
        var item_0 = $receiver_1[tmp$_1];
        var tmp$_2 = destination_0.add_11rb$;
        if (contains(item_0.questions, action.index)) {
          var $receiver_2 = toMutableList(item_0.questions);
          $receiver_2.remove_11rb$(action.index);
          item_0.questions = copyToArray($receiver_2);
        }tmp$_2.call(destination_0, item_0);
      }
      var newCategories_0 = copyToArray(destination_0);
      console.log(newCategories_0);
      return new State(newQuestions_0, newCategories_0);
    } else
      return state;
  }
  var package$components = _.components || (_.components = {});
  package$components.AppProps = AppProps;
  package$components.RouteNumberResult = RouteNumberResult;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  package$components.fApp = fApp;
  package$components.renderObject_q6otrr$ = renderObject;
  package$components.app_ss14n$ = app;
  package$components.QuestionsProps = QuestionsProps;
  Object.defineProperty(package$components, 'fQuestions', {
    get: function () {
      return fQuestions;
    }
  });
  package$components.questions_d5cq3o$ = questions;
  package$components.RedactProps = RedactProps;
  Object.defineProperty(package$components, 'fRedact', {
    get: function () {
      return fRedact;
    }
  });
  package$components.redact_in1iyi$ = redact;
  var package$container = _.container || (_.container = {});
  Object.defineProperty(package$container, 'appContainer', {
    get: function () {
      return appContainer;
    }
  });
  package$container.RedactDispatchProps = RedactDispatchProps;
  package$container.RedactStateProps = RedactStateProps;
  Object.defineProperty(package$container, 'redactHoc', {
    get: function () {
      return redactHoc;
    }
  });
  Object.defineProperty(package$container, 'redactRClass', {
    get: function () {
      return redactRClass;
    }
  });
  Object.defineProperty(package$container, 'redactContainer', {
    get: function () {
      return redactContainer;
    }
  });
  var package$data = _.data || (_.data = {});
  package$data.State = State;
  package$data.newId_hx7udi$ = newId;
  package$data.initialState = initialState;
  package$data.Category = Category;
  Object.defineProperty(package$data, 'categoryList', {
    get: function () {
      return categoryList;
    }
  });
  package$data.Question = Question;
  Object.defineProperty(package$data, 'questionList', {
    get: function () {
      return questionList;
    }
  });
  var package$hoc = _.hoc || (_.hoc = {});
  package$hoc.withDisplayName_7s1bg$ = withDisplayName;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$hoc.withDisplayName_yqt66y$ = withDisplayName_0;
  _.main = main;
  var package$redux = _.redux || (_.redux = {});
  package$redux.AddQuestion = AddQuestion;
  package$redux.DeleteQuestion = DeleteQuestion;
  package$redux.rootReducer_mybawf$ = rootReducer;
  fQuestions = functionalComponent(fQuestions$lambda);
  fRedact = functionalComponent(fRedact$lambda);
  appContainer = invoke(rConnect(appContainer$lambda, appContainer$lambda_0), withDisplayName_0('MyApp', fApp()));
  redactHoc = rConnect_0(redactHoc$lambda, redactHoc$lambda_0);
  redactRClass = withDisplayName_0('redact', fRedact);
  redactContainer = invoke(redactHoc, redactRClass);
  categoryList = [new Category(1, '\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F', [0, 1, 2, 3]), new Category(2, '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435', [4, 5, 6, 7]), new Category(3, '\u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438', [8, 9, 10, 11]), new Category(4, 'EXAMPLE', [12, 13, 14, 15])];
  var $receiver = [new Question('\u041A\u0430\u043A\u0430\u044F \u0441\u0442\u043E\u043B\u0438\u0446\u0430 \u0443 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u044B?', '\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F', ['\u0420\u043E\u0441\u0441\u0438\u044F', '\u042F\u043F\u043E\u043D\u0438\u044F', '\u0418\u0442\u0430\u043B\u0438\u044F'], ['\u0422\u043E\u043A\u0438\u043E', '\u041C\u043E\u0441\u043A\u0432\u0430', '\u0420\u0438\u043C']), new Question('\u041A\u0430\u043A\u0430\u044F \u0440\u0435\u043A\u0430 \u043B\u0435\u0436\u0438\u0442 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u044B?', '\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F', ['\u0420\u043E\u0441\u0441\u0438\u044F', '\u0415\u0433\u0438\u043F\u0435\u0442', '\u0421\u0428\u0410'], ['\u0412\u043E\u043B\u0433\u0430', '\u041D\u0438\u043B', '\u041E\u0433\u0430\u0439\u043E']), new Question('\u041A\u0430\u043A\u0430\u044F \u0433\u043E\u0440\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u044B?', '\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F', ['\u0420\u043E\u0441\u0441\u0438\u044F', '\u0421\u0428\u0410', '\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F'], ['\u041A\u043E\u0440\u043A\u043E\u0432\u0430\u0434\u0443', '\u042D\u043B\u044C\u0431\u0440\u0443\u0441', '\u0428\u0430\u0441\u0442\u0430']), new Question('\u0421\u043E\u043E\u0442\u043D\u0435\u0441\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u043E\u0440\u044B \u0438 \u043C\u0435\u0441\u0442\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043E\u043D\u0430 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0432 \u043C\u0438\u0440\u043E\u0432\u043E\u043C \u0442\u043E\u043F\u0435 \u043F\u043E \u0432\u044B\u0441\u043E\u0442\u0435', '\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F', ['\u042D\u0432\u0435\u0440\u0435\u0441\u0442', '\u0427\u043E\u0433\u043E\u0440\u0438', '\u041A\u0430\u043D\u0447\u0435\u043D\u0434\u0436\u0430\u043D\u0433\u0430'], ['1', '2', '3']), new Question('\u0421\u043E\u043E\u0442\u043D\u0435\u0441\u0438\u0442\u0435 \u043F\u043E\u043D\u044F\u0442\u0438\u044F', '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435', ['\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0438\u0437 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F', '\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0438\u0437 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F', '\u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C\u0438'], ['State', 'Props', 'OnClick']), new Question('\u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 react router \u0438 \u0438\u0445 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435', '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435', ['hashRouter', 'navLink', 'switch', 'route'], ['\u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u0437\u0430\u0434\u0430\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u0441\u0430\u043C\u044B\u0439 \u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442, \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441 URL', '\u0437\u0430\u0434\u0430\u0435\u0442 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F']), new Question('\u0421\u043E\u043E\u0442\u043D\u0435\u0441\u0438\u0442\u0435 \u043F\u043E\u043D\u044F\u0442\u0438\u044F', '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435', ['KClass', 'RClass', 'RComponent'], ['\u041A\u043B\u0430\u0441\u0441 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 React', '\u041A\u043B\u0430\u0441\u0441, \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 React', '\u041A\u043B\u0430\u0441\u0441 Kotlin']), new Question('\u0421\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438\u0437 \u0434\u0432\u0443\u0445 \u0441\u043F\u0438\u0441\u043A\u043E\u0432', '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435', ['React', 'Redux', 'React Route'], ['\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C', '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F']), new Question('\u0421\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 (\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A)', '\u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438', ['\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C', '\u041C\u043E\u043B\u043E\u0442\u043E\u043A', '\u0421\u0442\u0440\u043E\u0439\u043A\u0430'], ['Car', 'Hammer', 'Building']), new Question('\u0421\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 (\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u044F\u0437\u044B\u043A)', '\u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438', ['\u0421\u0443\u043F', '\u0413\u043E\u0440\u0447\u0438\u0446\u0430', '\u041B\u0438\u0441\u0442'], ['Suppe', 'Senf', 'Blatt']), new Question('\u0421\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 (\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A)', '\u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438', ['\u041B\u043E\u0448\u0430\u0434\u044C', '\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F', '\u042F\u0431\u043B\u043E\u043A\u043E'], ['Cheval', 'Ventilation', 'Une pomme']), new Question('\u0421\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 (\u041B\u0430\u0442\u044B\u043D\u044C)', '\u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438', ['\u0411\u043E\u0440\u043E\u0434\u0430', '\u0414\u043E\u0436\u0434\u044C', '\u041C\u0438\u0440'], ['Barba', 'Pluvia', 'Pax']), new Question('EXAMPLE_QUESTION1', 'EXAMPLE', ['Question1_1', 'Question1_2', 'Question1_3'], ['Answer1_1', 'Answer1_2', 'Answer1_3']), new Question('EXAMPLE_QUESTION2', 'EXAMPLE', ['Question2_1', 'Question2_2', 'Question2_3'], ['Answer2_1', 'Answer2_2', 'Answer2_3']), new Question('EXAMPLE_QUESTION3', 'EXAMPLE', ['Question3_1', 'Question3_2', 'Question3_3'], ['Answer3_1', 'Answer3_2', 'Answer3_3']), new Question('EXAMPLE_QUESTION4', 'EXAMPLE', ['Question4_1', 'Question4_2', 'Question4_3'], ['Answer4_1', 'Answer4_2', 'Answer4_3'])];
  var destination = ArrayList_init($receiver.length);
  var tmp$, tmp$_0;
  var index = 0;
  for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
    var item = $receiver[tmp$];
    destination.add_11rb$(to((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
  }
  questionList = toMap(destination);
  main();
  Kotlin.defineModule('course_work_3', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlin-react-router-dom'), require('kotlin-react'), require('kotlinx-html-js'), require('kotlin-react-redux'), require('kotlin-extensions'), require('kotlin-redux'), require('redux')));

//# sourceMappingURL=course_work_3.js.map
