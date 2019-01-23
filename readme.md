## Dashboard template

Simple and fast dashboard template.

## Installation

```
npm install --save css-ui-dashboard
```

## Demo

- https://css-ui.github.io/dashboard/simple
- https://css-ui.github.io/dashboard/full

## Quick start

CSS dependencies.

```html
<link rel="stylesheet" href="path/to/normalize.css">
<link rel="stylesheet" href="path/to/perfect-scrollbar.css">
<link rel="stylesheet" href="path/to/font-awesome.css">
<link rel="stylesheet" href="path/to/open-sans.css">
<link rel="stylesheet" href="path/to/cssui.css">
```

An additional CSS/html/js according to instructions.

- [CSS dropdown menu](https://github.com/css-ui/dropdown-menu)
- [CSS Responsive menu](https://github.com/css-ui/responsive-menu)

Other as necessary.

- [CSS tooltip](https://github.com/css-ui/tooltip)
- [CSS table](https://github.com/css-ui/table)
- [CSS modal](https://github.com/css-ui/modal)

CSS dashboard.

```html
<link rel="stylesheet" href="path/to/style.dashboard.css">
```

Use Open Sans fotns.

```css
font-family: 'Open Sans', sans-serif;
```

We will add new features.

1) Add logged to sidebar.

```html
<div class="logged sidebar">
	<ul class="clear">
		<li class="gravatar float left"><img src="path/to/user.png" alt="user"></li>
		<li class="user float left">John Doe <a href="#">Logout</a></li>
	</ul>
</div>
```

2) Add header.

```html
<div class="header">
	<div class="clear">

		<!-- header dashboard -->
		<div class="float left">
			<ul class="breadcrumb">
				<li><a href=""><i class="fa fa-square-o" aria-hidden="true"></i>Dashboard</a></li>
				<li><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Sample</li>
			</ul>
		</div>

		<!-- logged in header user -->
		<div class="float right user panel">

			<!-- user identity -->
			<div class="float left logged in">
				<ul class="clear">
					<li class="user float left">You login as John Doe</li>
					<li class="gravatar float left"><img src="img/user.png" alt="user"></li>
				</ul>
			</div>

			<!-- dropdown menu -->
			<div class="float left">

				<!--                       -->
				<!-- Here we dropdown menu -->
				<!--                       -->

			</div>
	</div>

	<!-- content -->
	<div class="content">
		<div class="box style">
			<h4>Sample</h4>
			Content...
		</div>
	</div>
</div>
```

Location of new properties.

```html
<!-- nav wrapper -->
<div class="nav">

	<!-- click show/hide menu -->
	<div class="click"></div>
	<div class="sidebar">

		<!-- title for sidebar -->
		<div class="title">
			<p>Title for sidebar</p>
		</div>

		<!--                          -->
		<!-- 1) Add logged to sidebar -->
		<!--                          -->

		<div class="responsive">
			<ul class="menu scrollbar">

				<!-- dropdown menu -->
				<li>
					<span class="name">Dropdown menu</span>
					<ul>
						<li><a href="#">Click</a></li>
						<li class="parent">
						<a href="#" class="employ current">Europe</a>
							<ul class="submenu">
								<li><a href="#">Germany</a></li>
								<li><a href="#" class="current">France</a></li>
								<li><a href="#">Italy</a></li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- content wrapper -->
<div class="content-wrapper">

	<!--               -->
	<!-- 2) Add header -->
	<!--               -->

</div>
```

javascript libraries and plugins.

```html
<script src="path/to/nanobar.js"></script>
<script>
	$(function() {

		var nanobar = new Nanobar();
		nanobar.go(100);

		/* Add responsive and dropdown menu js */
	});
</script>
```

Enjoy dashboard.
