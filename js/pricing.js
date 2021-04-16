const pricingTable = 
[
{
	pageviews: "10K",
	price_monthly: "$2 / mo",
	price_yearly: "$1 / mo"
},
{
	pageviews: "100K",
	price_monthly: "$6 / mo",
	price_yearly: "$3 / mo"
},
{
	pageviews: "200K",
	price_monthly: "$10 / mo",
	price_yearly: "$5 / mo"
},
{
	pageviews: "500K",
	price_monthly: "$14 / mo",
	price_yearly: "$7 / mo"
},
{
	pageviews: "1m",
	price_monthly: "$24 / mo",
	price_yearly: "$12 / mo"
},
{
	pageviews: "2m",
	price_monthly: "$36 / mo",
	price_yearly: "$18 / mo"
},
{
	pageviews: "5m",
	price_monthly: "$50 / mo",
	price_yearly: "$25 / mo"
},
{
	pageviews: "10m",
	price_monthly: "$76 / mo",
	price_yearly: "$32 / mo"
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

