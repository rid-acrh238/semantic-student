File utama

GET|HEAD        / ............................................................ home › routes/web.php:10
  
  Password
  GET|HEAD        confirm-password ........... password.confirm › Auth\ConfirmablePasswordController@show
  POST            confirm-password .... password.confirm.store › Auth\ConfirmablePasswordController@store
  
  DAshboard
  GET|HEAD        dashboard ....................................... dashboard › DashboardController@index
  
  email verification
  POST            email/verification-notification verification.send › Auth\EmailVerificationNotification…
  GET|HEAD        forgot-password ............ password.request › 
  
  password reset
  Auth\PasswordResetLinkController@create
  POST            forgot-password ............... password.email › Auth\PasswordResetLinkController@store
  
  login
  GET|HEAD        login .............................. login › Auth\AuthenticatedSessionController@create
  POST            login ......................... login.store › 
  
  logout
  Auth\AuthenticatedSessionController@store
  POST            logout ........................... logout › 
  
  memberrs/anggota
  Auth\AuthenticatedSessionController@destroy
  GET|HEAD        members ........................................ members.index › MemberController@index
  POST            members ........................................ members.store › MemberController@store
  GET|HEAD        members/create ............................... members.create › MemberController@create
  GET|HEAD        members/{member} ................................. members.show › MemberController@show
  PUT|PATCH       members/{member} ............................. members.update › MemberController@update
  DELETE          members/{member} ........................... members.destroy › MemberController@destroy
  GET|HEAD        members/{member}/edit ............................ members.edit › MemberController@edit
  GET|HEAD        register .............................. register › 
  
  
  Auth\RegisteredUserController@create
  POST            register ......................... register.store › 
  
  Auth\RegisteredUserController@store
  GET|HEAD        reports ........................................ reports.index › 
  
  ReportController@index
  GET|HEAD        reports/export ............................... reports.export › ReportController@export
  GET|HEAD        reports/{year}/{month}/transactions .............. ReportController@transactionsByMonth
  POST            reset-password ...................... password.store › 
  
  Auth\NewPasswordController@store
  GET|HEAD        reset-password/{token} ............. password.reset › Auth\NewPasswordController@create
  ANY             settings ...................................... Illuminate\Routing › 
  
  RedirectController
  GET|HEAD        settings/appearance ............................... appearance › routes/settings.php:21
  
  GET|HEAD        settings/password .................... password.edit › Settings\PasswordController@edit
  PUT             settings/password ................ password.update › Settings\PasswordController@update
  GET|HEAD        settings/profile ....................... profile.edit › Settings\ProfileController@edit
  PATCH           settings/profile ................... profile.update › Settings\ProfileController@update
  DELETE          settings/profile ................. profile.destroy › Settings\ProfileController@destroy
  GET|HEAD        storage/{path} storage.local › vendor/laravel/framework/src/Illuminate/Filesystem/File…
  PUT             storage/{path} storage.local.upload › vendor/laravel/framework/src/Illuminate/Filesyst…
  GET|HEAD        transactions ......................... transactions.index › TransactionController@index
  POST            transactions ......................... transactions.store › TransactionController@store
  GET|HEAD        transactions/create ................ transactions.create › TransactionController@create
  GET|HEAD        transactions/{transaction} ............. transactions.show › TransactionController@show
  PUT|PATCH       transactions/{transaction} ......... transactions.update › TransactionController@update
  DELETE          transactions/{transaction} ....... transactions.destroy › TransactionController@destroy
  GET|HEAD        transactions/{transaction}/edit ........ transactions.edit › TransactionController@edit
  GET|HEAD        up vendor/laravel/framework/src/Illuminate/Foundation/Configuration/ApplicationBuilder…
  GET|HEAD        verify-email ............. verification.notice › Auth\EmailVerificationPromptController
  GET|HEAD        verify-email/{id}/{hash} ............. verification.verify › Auth\VerifyEmailController