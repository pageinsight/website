const pricingTable = 
[
{
	pageviews: "10K",
	price_monthly: "$6 / mo",
	price_yearly: "$4 / mo"
},
{
	pageviews: "100K",
	price_monthly: "$12 / mo",
	price_yearly: "$8 / mo"
},
{
	pageviews: "200K",
	price_monthly: "$18 / mo",
	price_yearly: "$12 / mo"
},
{
	pageviews: "500K",
	price_monthly: "$27 / mo",
	price_yearly: "$18 / mo"
},
{
	pageviews: "1m",
	price_monthly: "$48 / mo",
	price_yearly: "$32 / mo"
},
{
	pageviews: "2m",
	price_monthly: "$69 / mo",
	price_yearly: "$46 / mo"
},
{
	pageviews: "5m",
	price_monthly: "$99 / mo",
	price_yearly: "$66 / mo"
},
{
	pageviews: "10m",
	price_monthly: "$150 / mo",
	price_yearly: "$100 / mo"
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

