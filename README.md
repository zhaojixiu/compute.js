# compute.js

版本：v1.0.0<br/>
作者：落木萧萧<br/>


### 非模块化使用方法

在使用js进行浮点型数值计算的时候，会出现数据计算不准确的情况，比如：<br/>
console.log( 0.1 + 0.2 );  //输出 0.30000000000000004 <br/>
console.log( 0.3 - 0.1 );  //输出 0.19999999999999998 <br/>

其原因是在有限的存储空间下，绝大部分的十进制小数都不能用二进制浮点数来精确表示。


此compute.js插件  专为解决此类问题而诞生   能够准确的进行“加减乘除”计算，并提供精确的四舍五入



1: 引入compute.js <br/>
	  	<code><script src="compute.js" type="text/javascript" charset="utf-8"></script></code>
	  
2: 加减乘除使用方法：<br/>
		调用Compute方法，传入3个参数。第一个参数为操作数1，第二个参数为操作数2，第三个参数为操作符（'+'、'-'、'*'、'/'）<br/>
      	加 : <code>Compute(0.3, 0.2, '+')</code> <br/>
      	减 : <code>Compute(0.3, 0.2, '-')</code> <br/>
      	乘 : <code>Compute(0.3, 0.2, '*')</code> <br/>
      	除 : <code>Compute(0.3, 0.2, '/')</code> <br/>
        
3: 四舍五入使用方法：<br/>
		调用Round方法，传入2个参数。第一个参数为操作数，第二个参数为要保留的小数点位数<br/>
		<code>Round(0.988745,2)</code>  //0.99



### 注：因README.md文档上传后有部分丢失，具体使用文档请下载后查看：非模块化使用方法.txt
