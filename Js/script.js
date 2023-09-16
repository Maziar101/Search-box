$(document).ready(() => {
    // ابتدا نمونه‌های اولیه را نمایش دهید
    displayProducts([]);

    $.getJSON("Js/data.json", (data) => {
        // وقتی دیتا از JSON خوانده شده
        $("#search-brand").keyup(function () {
            var searchBrand = $("#search-brand").val();
            
            // فیلتر داده‌ها بر اساس برند
            var filteredData = data.filter((item) =>
                item.Brand.toLowerCase().includes(searchBrand.toLowerCase())
            );
            
            displayProducts(filteredData);
        });
        $("#search-name").keyup(() => {
            var searchName = $("#search-name").val();
            
            var filterName = data.filter((item) =>
                item.name.toLowerCase().includes(searchName.toLowerCase())
            );
            
            displayProducts(filterName); // اینجا نتیجه فیلتر را به تابع displayProducts می‌فرستیم
        });
        $("#search-btn").on("click",()=>{
            var minSalary = parseFloat($("#search-sal-F").val());
            var maxSalary = parseFloat($("#search-sal-L").val());

            var filteredSal = data.filter((item) =>
                item.Salary >= minSalary && item.Salary <= maxSalary
            );

            displayProducts(filteredSal);
        })
        

        displayProducts(data);
    });
    function displayProducts(products) {
        $("#Products").empty(); // پاک کردن نمونه‌های قبلی
        products.forEach((product) => {
            var productDiv = document.createElement("div");
            var imgTag = document.createElement("img");
            var carModel = document.createElement("p");
            var carName = document.createElement("p");
            var salary = document.createElement("p");
            imgTag.src = product.img;
            carModel.innerText = `Brand: ${product.Brand}`;
            carName.innerText = `Name: ${product.name}`;
            salary.innerText = `Salary: ${product.Salary}`;
            carName.setAttribute("style", "margin-left: 20px;");
            carModel.setAttribute("style", "margin-left: 20px;");
            salary.setAttribute("style", "margin-left: 20px;");
            imgTag.setAttribute("style", "margin: auto; width: 200px; height: 150px; border-radius: 8px;");
            productDiv.append(imgTag);
            productDiv.append(carModel);
            productDiv.append(carName);
            productDiv.append(salary);
            $("#Products").append(productDiv);
        });
    }
});
