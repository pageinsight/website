const pricingTable = 
[
{
	pageviews: "10K",
	price_monthly: "$3 / mo",
	price_yearly: "$2 / mo"
},
{
	pageviews: "100K",
	price_monthly: "$9 / mo",
	price_yearly: "$6 / mo"
},
{
	pageviews: "200K",
	price_monthly: "$15 / mo",
	price_yearly: "$10 / mo"
},
{
	pageviews: "500K",
	price_monthly: "$24 / mo",
	price_yearly: "$16 / mo"
},
{
	pageviews: "1m",
	price_monthly: "$42 / mo",
	price_yearly: "$28 / mo"
},
{
	pageviews: "2m",
	price_monthly: "$63 / mo",
	price_yearly: "$42 / mo"
},
{
	pageviews: "5m",
	price_monthly: "$90 / mo",
	price_yearly: "$60 / mo"
},
{
	pageviews: "10m",
	price_monthly: "$135 / mo",
	price_yearly: "$90 / mo"
},
{
	pageviews: "10m+",
	price_monthly: "<a href='mailto:webpageinsight@gmail.com' class='rex-underline rex-color-black' target='_blank'>Contact us</a>",
	price_yearly: "<a href='mailto:webpageinsight@gmail.com' class='rex-underline rex-color-black' target='_blank'>Contact us</a>"
}
];

window.onload = () => {

	let toggleSwitch = document.getElementById("customToggleSwitch");
	let rangeSlider = document.getElementById("customRangeSlider");
	let pageviewText = document.getElementById("pageviews_elm");
	let priceText = document.getElementById("price_elm");

	toggleSwitch.onclick = () => {
		updatePricing();
	};

	rangeSlider.oninput = function() {
		updatePricing();
	};

	function updatePricing(){
		let priceObj = pricingTable[rangeSlider.value];
		pageviewText.textContent = priceObj.pageviews;
		priceText.innerHTML = toggleSwitch.checked ? priceObj.price_yearly : priceObj.price_monthly;
	}

	updatePricing();
};

