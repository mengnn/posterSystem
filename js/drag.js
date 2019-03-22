/*$(function() {*/
	function moveXY1(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};

			callback.call(this, e, posix);
		}
	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

	 /*文字*/
		var $box = $('.clicked .wenzi1').mousedown(function(e) {

		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		    $.extend(document, {'move': true, 'move_target': this});
		    // ,.coor_right,.coor_topR,.coor_left,.coor_leftTop,.coor_leftBottom
		}).on('mousedown', '.coor1', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY
		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	function moveXY2(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						/*'top': e.pageY - posix.y,
						'left': e.pageX - posix.x*/
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
		/*文字原文*/
		var $box = $('.clicked .wenzi2').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor2', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	function moveXY3(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
		/*图片*/
		var $box = $('.clicked .dir12').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor3', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	function moveXY3b(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
		/*图片*/
		var $box = $('.clicked .dir12b').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor3b', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	function moveXY4(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
		/*图片*/
		var $box = $('.clicked .dir13').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor4', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	function moveXY5(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
		/*图片*/
		var $box = $('.clicked .dir14').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor5', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	function moveXY6(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
		/*姓名*/
		var $box = $('.clicked .dir21').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor6', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	function moveXY7(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
		/*图片*/
		var $box = $('.clicked .dir22').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor7', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	function moveXY8(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
		/*图片*/
		var $box = $('.clicked .dir23').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor8', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*公司名称*/
	function moveXY9(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
		var $box = $('.clicked .dir24').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor9', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*身份证号*/
	function moveXY10(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir25').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor10', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*工作电话*/
	function moveXY11(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir26').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor11', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*职位*/
	function moveXY12(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir27').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor12', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*省市县*/
	function moveXY13(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir28').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor13', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*工作地址*/
	function moveXY14(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir29').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor14', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*生日*/
	function moveXY15(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir30').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor15', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*性别*/
	function moveXY16(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir31').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor16', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*照片*/
	function moveXY17(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir32').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor17', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*确认码*/
	function moveXY18(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir33').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor18', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*大会签到编号*/
	function moveXY145(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir145').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor145', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*酒店信息*/
	function moveXY19(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir34').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor19', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*房间名称*/
	function moveXY20(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir35').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor20', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*房间号*/
	function moveXY21(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir36').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor21', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*是否拼房*/
	function moveXY22(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir37').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor22', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*入住日期*/
	function moveXY23(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir38').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor23', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*退房日期*/
	function moveXY24(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir39').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor24', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*活动标题*/
	function moveXY25(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir40').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor25', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*主办发*/
	function moveXY26(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir41').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor26', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*开始时间*/
	function moveXY27(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir42').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor27', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*结束时间*/
	function moveXY28(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir43').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor28', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*活动地点*/
	function moveXY29(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir44').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor29', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*联系人*/
	function moveXY30(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir45').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor30', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*联系电话*/
	function moveXY31(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir46').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor31', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
	/*联系邮箱*/
	function moveXY32(){
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					$(this.move_target).css({
						'top': '7',
						'left': '0'
					});
				};
			callback.call(this, e, posix);
		}

	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});

		var $box = $('.clicked .dir47').mousedown(function(e) {
		    var offset = $(this).offset();

		    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
		   /* this.posix = {'x': '0', 'y':'0'};*/
		    $.extend(document, {'move': true, 'move_target': this});
		}).on('mousedown', '.coor32', function(e) {
		    var posix = {
		            'w': $box.width(),
		            'h': $box.height(),
		            'x': e.pageX,
		            'y': e.pageY

		        };

		    $.extend(document, {'move': true, 'call_down': function(e) {
		        $box.css({
		            'width': Math.max(30, e.pageX - posix.x + posix.w),
		            'height': Math.max(30, e.pageY - posix.y + posix.h)
		        });
		    }});
		    return false;
		});
	};
 function all(){
   moveXY1();
   moveXY2();
   moveXY3();
   moveXY3b();
   moveXY4();
   moveXY5();
   moveXY6();
   moveXY7();
   moveXY8();
   moveXY9();
   moveXY10();
   moveXY11();
   moveXY12();
   moveXY13();
   moveXY14();
   moveXY15();
   moveXY16();
   moveXY17();
   moveXY18();
   moveXY19();
   moveXY20();
   moveXY21();
   moveXY22();
   moveXY23();
   moveXY24();
   moveXY25();
   moveXY26();
   moveXY27();
   moveXY28();
   moveXY29();
   moveXY30();
   moveXY31();
   moveXY32();
   moveXY145();
 }
 all();
/*});*/
